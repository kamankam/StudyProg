import ProfileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _callSubscriber() {
    console.log("state is changed");
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, it is my first post", likescount: "0" },
        { id: 2, message: "Good day!", likescount: "20" },
        { id: 3, message: "Good Night!", likescount: "10" },
      ],
      newPostText: "it-kamasutra.com",
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "Yo" },
        { id: 2, message: "Yooo" },
        { id: 3, message: "Yoooo" },
        { id: 4, message: "Yooooo" },
      ],
      newMessageText: " ",
      dialogs: [
        {
          id: 1,
          name: "Leo",
          ava:
            "https://s.ura.news/760/images/news/upload/news/410/202/1052410202/508314_Moskovskiy_zoopark_Moskva_zhivotnie_pisets_lisitsa_pesets_polyarnaya_lisa_beshenstvo_250x0_3600.2400.0.0.jpg",
        },
        {
          id: 2,
          name: "Stas",
          ava:
            "https://s.ura.news/760/images/news/upload/news/410/202/1052410202/508314_Moskovskiy_zoopark_Moskva_zhivotnie_pisets_lisitsa_pesets_polyarnaya_lisa_beshenstvo_250x0_3600.2400.0.0.jpg",
        },
        {
          id: 3,
          name: "Anna",
          ava:
            "https://s.ura.news/760/images/news/upload/news/410/202/1052410202/508314_Moskovskiy_zoopark_Moskva_zhivotnie_pisets_lisitsa_pesets_polyarnaya_lisa_beshenstvo_250x0_3600.2400.0.0.jpg",
        },
        {
          id: 4,
          name: "Azhar",
          ava:
            "https://s.ura.news/760/images/news/upload/news/410/202/1052410202/508314_Moskovskiy_zoopark_Moskva_zhivotnie_pisets_lisitsa_pesets_polyarnaya_lisa_beshenstvo_250x0_3600.2400.0.0.jpg",
        },
        {
          id: 5,
          name: "Yna",
          ava:
            "https://s.ura.news/760/images/news/upload/news/410/202/1052410202/508314_Moskovskiy_zoopark_Moskva_zhivotnie_pisets_lisitsa_pesets_polyarnaya_lisa_beshenstvo_250x0_3600.2400.0.0.jpg",
        },
        {
          id: 6,
          name: "Nastya",
          ava:
            "https://s.ura.news/760/images/news/upload/news/410/202/1052410202/508314_Moskovskiy_zoopark_Moskva_zhivotnie_pisets_lisitsa_pesets_polyarnaya_lisa_beshenstvo_250x0_3600.2400.0.0.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
