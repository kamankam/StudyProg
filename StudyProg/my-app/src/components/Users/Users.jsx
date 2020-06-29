import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.jpg";

class Users extends React.Component {
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
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && styles.selectedPage}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>

        {this.props.users.map((u) => (
          <div key={u.id.value}>
            <span>
              <div>
                <img
                  src={u.picture.medium != null ? u.picture.medium : userPhoto}
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id.value);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id.value);
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name.first}</div>
              {/* // <div>{u.status}</div> */}
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.street"}</div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
export default Users;
