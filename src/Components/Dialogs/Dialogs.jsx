import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from 'react-router-dom';

const Dialogs=(props)=>{
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key = {d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key = {m.id} />);
    let NewMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>

    return (
       <div className={c.dialogs}>
           <div className={c.dialogsItem}>
               {dialogsElements}
           </div>
           <div className={c.messages}>
               <div>{messagesElements}</div>
               <div>
                   <div><textarea value={NewMessageBody} onChange={onNewMessageChange}
                                  placeholder='Enter your message'></textarea></div>
                   <div><button onClick={onSendMessageClick}>Send</button></div>
               </div>

           </div>
       </div>

    )
}

export default Dialogs;