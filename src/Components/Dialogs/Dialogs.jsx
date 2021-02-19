import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
const Dialogs=(props)=>{


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let massagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
       <div className={c.dialogs}>
           <div className={c.dialogsItem}>
               {dialogsElements}
           </div>
           <div className={c.messages}>
               {massagesElements}

           </div>
       </div>

    )
}

export default Dialogs;