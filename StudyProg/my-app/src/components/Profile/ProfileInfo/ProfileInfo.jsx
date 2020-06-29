import React from "react";
import s from "./ProfileInfo.module.css";
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://urokiakvareli.ru/sites/default/files/styles/moi_stil_2/public/2018-06/risuyem-portret-sobaki.jpg?itok=FujxkSLh"></img>
      </div>
      <div className={s.description}> ava_description</div>
    </div>
  );
};

export default ProfileInfo;
