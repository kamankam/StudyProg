import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {
  folowActionCreator,
  unfolowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/users-reducer";
import { connect } from "react-redux";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(
        `https://randomuser.me/api/?results=${this.props.pageSize}&seed=abc&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.results);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://randomuser.me/api/?results=${this.props.pageSize}&seed=abc&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.results);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
      />
    );
  }
}

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

const UsersConteiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);

export default UsersConteiner;
