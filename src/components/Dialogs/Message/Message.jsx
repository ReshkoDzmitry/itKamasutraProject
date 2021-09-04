import classes from './../Dialogs.module.css';
import React from "react";


const Message = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let textNewMessage = newMessage.current.value;
        alert(textNewMessage);
    }

    return (
        <div>
            <div className={classes.dialog}>{props.message}</div>
            <div>
                <textarea ref={newMessage}></textarea>;
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}


export default Message;