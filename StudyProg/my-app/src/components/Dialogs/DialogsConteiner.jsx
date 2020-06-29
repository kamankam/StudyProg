import React from "react";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { DialogsPage: state.dialogsPage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageActionCreator: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChangeActionCreator: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    },
  };
};

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;
