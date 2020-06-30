import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../../src/assets/images/user.jpg";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
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
                    props.unfollow(u.id.value);
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
};

export default Users;
