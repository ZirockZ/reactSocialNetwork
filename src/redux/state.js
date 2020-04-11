import { getDate, getTime } from '../utilities.js';

const POST_ADD = 'POST-ADD';
const MESSAGE_ADD = 'MESSAGE-ADD';
const SET_RENDER_METHOD = 'SET-RENDER-METHOD';

const _state = {
    profilePage: {
        postsArr: [
            { id: "1", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "От тебя соцсеть говниной пахнет, удали страницу" },
            { id: "2", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Ты пидарас" },
            { id: "3", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Анимешники пидары" },
            { id: "4", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Три дня создавал страницу на гитхабе" },
            { id: "5", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Если мы будем вместе делать проект - ты будешь уборщиком в моей компании" },
            { id: "6", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Кусок аштиэмэля" }
        ]
    },
    messagesPage: {
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
        ]
    }
}

export const postAddActionCreator = (sendBy, text) => ({type: POST_ADD, sendBy, sendDate: getDate(), text, id: "999"});
export const messageAddActionCreator = (sendBy, text) => ({type: MESSAGE_ADD, sendBy, sendDate: getTime(), text, id: "999" });
export const setRenderMethodActionCreator = (method) => ({type: SET_RENDER_METHOD, method});

let store = {
    get state(){
        return _state;
    },

    _rerender() { },

    dispatch(action){
        switch (action.type){
            case POST_ADD:
                this.state.profilePage.postsArr.unshift({ sendBy: action.sendBy, sendDate: getDate(), text: action.text, id: action.id });
                this._rerender();
                break;
            case MESSAGE_ADD:
                this.state.messagesPage.messagesArr.push({ sendBy: action.sendBy, sendDate: getTime(), text: action.text, id: action.id });
                this._rerender();
                break;
            case SET_RENDER_METHOD:
                this._rerender = action.method;
                break;
            default:
                alert("Метод не найден");
                break;
        }        
    }
};

window.store = store;

export default store;

