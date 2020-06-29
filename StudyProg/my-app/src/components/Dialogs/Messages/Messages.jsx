import React from "react";
import s from "./../Dialogs.module.css";

const Messages = (props) => {
  return (
    <div className={s.messageBlok}>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

export default Messages;
