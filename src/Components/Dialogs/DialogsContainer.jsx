import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/Dialogs-reducer";

const Dialogs=(props)=>{
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let NewMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

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