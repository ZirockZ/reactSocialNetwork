/*
import storeReducer from './store-reducer';
import profileReducer from './profile-reducer.js';
import messagesReducer from './messages-reducer.js';


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

let store = {
    get state(){
        return _state;
    },

    _rerender() { },

    dispatch(action){        
        store = storeReducer(store, action);
        this.state.profilePage = profileReducer(this.state.profilePage, action);
        this.state.messagesPage = messagesReducer(this.state.messagesPage, action);

        this._rerender();      
    }
};








export default store;*/
