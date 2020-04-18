import { getDate } from '../utilities.js';
import {POST_ADD} from '../consts.js';

let initStore = { 
    postsArr: [
        { id: "1", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "От тебя соцсеть говниной пахнет, удали страницу" },
        { id: "2", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Ты пидарас" },
        { id: "3", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Анимешники пидары" },
        { id: "4", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Три дня создавал страницу на гитхабе" },
        { id: "5", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Если мы будем вместе делать проект - ты будешь уборщиком в моей компании" },
        { id: "6", sendBy: "Андрей Карев", sendDate: "30.03.2020", text: "Кусок аштиэмэля" }
    ]
};

let stateCopy;

const profileReducer = (state = initStore, action) => {
    debugger
    switch (action.type){
        case POST_ADD:
            stateCopy = {...state};
            stateCopy.postsArr = [...state.postsArr]
            stateCopy.postsArr.unshift({ sendBy: action.sendBy, sendDate: action.sendDate, text: action.text, id: action.id });
            return stateCopy;
        default:
            return state;
    }  
}


export const postAddActionCreator = (sendBy, text) => ({type: POST_ADD, sendBy, sendDate: getDate(), text, id: "999"});
export default profileReducer;