import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validator';

const Dialogs=(props)=>{
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key = {d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key = {m.id} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (value) =>{
        props.sendMessage(value.newMessageBody);
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>

    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItem}>
        {dialogsElements}
        </div>
        <div className={c.messages}>
        <div>{messagesElements}</div>
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>

    )
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate = {[required,maxLength100]}/>
                </div>
                <div>
                    <button >Send</button>
                </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;