import { getTime } from '../utilities.js';
import {MESSAGE_ADD} from '../consts.js';

let initStore = {
    dialogsArr: [
        { sendBy: "Андрей Карев", userId: "1", text: "Заебал игнорить" },
        { sendBy: "Саня Говняшкин", userId: "2", text: "Я вернулся" },
        { sendBy: "Никитка Малышкин", userId: "3", text: "Заебал игнорить" },
        { sendBy: "Андрей Карев", userId: "4", text: "Заебал игнорить" },
        { sendBy: "Андрей Карев", userId: "5", text: "Заебал игнорить" },
        { sendBy: "Андрей Карев", userId: "6", text: "Заебал игнорить" },
        { sendBy: "Андрей Карев", userId: "7", text: "Заебал игнорить" },
        { sendBy: "Андрей Карев", userId: "8", text: "Заебал игнорить" },
        { sendBy: "Андрей Карев", userId: "9", text: "Заебал игнорить" },
        { sendBy: "Андрей Карев", userId: "10", text: "Заебал игнорить" },
        { sendBy: "Андрей Карев", userId: "11", text: "Заебал игнорить" },
        { sendBy: "Андрей Карев", userId: "12", text: "Заебал игнорить" }
    ],
    messagesArr: [
        { sendBy: "Андрей Карев", sendDate: "22:48", text: "говно", id: "1" },
        { sendBy: "Андрей Карев", sendDate: "22:48", text: "не такое уж и говно", id: "2" },
        { sendBy: "Андрей Карев", sendDate: "22:48", text: "говно", id: "3" },
        { sendBy: "Андрей Карев", sendDate: "22:48", text: "говно", id: "4" },
        { sendBy: "Андрей Карев", sendDate: "22:48", text: "говно", id: "5" },
        { sendBy: "Андрей Карев", sendDate: "22:48", text: "говно", id: "6" },
        { sendBy: "Андрей Карев", sendDate: "22:48", text: "приколямба", id: "7" },
        { sendBy: "Андрей Карев", sendDate: "22:48", text: "говно", id: "8" },
        { sendBy: "Андрей Карев", sendDate: "22:48", text: "говно", id: "9" },
    ]};

let stateCopy;

const messagesReducer = (state = initStore, action) => {
    debugger
    switch (action.type){
        case MESSAGE_ADD:
            stateCopy = {...state};
            stateCopy.messagesArr = [...state.messagesArr];
            stateCopy.messagesArr.push({ sendBy: action.sendBy, sendDate: action.sendDate, text: action.text, id: action.id });
            return stateCopy;
        default:
            return state;
    }  
}

export const messageAddActionCreator = (sendBy, text) => ({type: MESSAGE_ADD, sendBy, sendDate: getTime(), text, id: "999" });
export default messagesReducer;