import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


/*const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}*/


/*const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    );
}*/


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        );
    });


    let messagesElements = props.state.messages.map((message) => {
        return (
            <Message message={message.message}/>
        );
    });


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;