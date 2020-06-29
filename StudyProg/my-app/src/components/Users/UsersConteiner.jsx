import React from "react";
import Users from "./Users";

import {
  folowActionCreator,
  unfolowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/users-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(folowActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfolowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageActionCreator(currentPage));
    },
  };
};
const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersConteiner;
