const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = state.newMessageText;
      // let newMessage = {
      //   id: 5,
      //   message: state.newMessageText,
      // };
      return {
        ...state,
        newMessageText: "",
        messages: [
          ...state.messages,
          {
            id: 5,
            message: newMessage,
          },
        ],
      };
      //stateCopy.messages.push(newMessage);
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.newMessage };
      //stateCopy.newMessageText = action.newMessage;
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const onMessageChangeActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text };
};

export default dialogsReducer;
