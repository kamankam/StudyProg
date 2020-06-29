import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  let state = props.DialogsPage;
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogsItem ava={dialog.ava} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Messages message={message.message} />
  ));
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessageActionCreator();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChangeActionCreator(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}
          />
        </div>
        <div>
          <button onClick={addMessage}>Add text</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
