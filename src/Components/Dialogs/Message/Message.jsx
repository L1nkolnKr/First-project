import React from 'react';
import c from './../Dialogs.module.css';



const Message=(props)=>{
    let newMessageElement=React.createRef();
    let addMessage=() =>{
        let text=newMessageElement.current.value;
        alert(text);
    }
    return(
        <div>
            <div>
            <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>
            <div className={c.dialogs}>{props.message}</div>

        </div>
    )
}


export default Message;