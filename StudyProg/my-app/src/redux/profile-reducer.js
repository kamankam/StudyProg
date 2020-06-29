const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, it is my first post", likescount: "0" },
    { id: 2, message: "Good day!", likescount: "20" },
    { id: 3, message: "Good Night!", likescount: "10" },
  ],
  newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      // let newPost = state.newPostText;
      let newPost = {
        id: 4,
        message: state.newPostText,
        likescount: 7,
      };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost],
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const onPostChangeActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
