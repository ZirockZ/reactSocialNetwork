import renderer from './render.js';

let getTime = () => {let time = new Date(); return ((time.getHours() < 10) ? "0" : "") + time.getHours() + ":" + ((time.getMinutes() < 10) ? "0" : "") + time.getMinutes();}
let getDate = () => {let time = new Date(); return ((time.getDay() < 10) ? "0" : "") + time.getDay() + ":" + ((time.getMonth() + 1 < 10) ? "0" : "") + (time.getMonth() + 1) + ":" + time.getFullYear() < 10;}



let dialogsArr = [
    { name: "Андрей Карев", userId: "1", messageText: "Заебал игнорить" },
    { name: "Саня Говняшкин", userId: "2", messageText: "Я вернулся" },
    { name: "Никитка Малышкин", userId: "3", messageText: "Заебал игнорить" },
    { name: "Андрей Карев", userId: "4", messageText: "Заебал игнорить" },
    { name: "Андрей Карев", userId: "5", messageText: "Заебал игнорить" },
    { name: "Андрей Карев", userId: "6", messageText: "Заебал игнорить" },
    { name: "Андрей Карев", userId: "7", messageText: "Заебал игнорить" },
    { name: "Андрей Карев", userId: "8", messageText: "Заебал игнорить" },
    { name: "Андрей Карев", userId: "9", messageText: "Заебал игнорить" },
    { name: "Андрей Карев", userId: "10", messageText: "Заебал игнорить" },
    { name: "Андрей Карев", userId: "11", messageText: "Заебал игнорить" },
    { name: "Андрей Карев", userId: "12", messageText: "Заебал игнорить" }
];

let messagesArr = [
    { name: "Андрей Карев", date: "22:48", text: "говно", id: "1" },
    { name: "Андрей Карев", date: "22:48", text: "не такое уж и говно", id: "2" },
    { name: "Андрей Карев", date: "22:48", text: "говно", id: "3" },
    { name: "Андрей Карев", date: "22:48", text: "говно", id: "4" },
    { name: "Андрей Карев", date: "22:48", text: "говно", id: "5" },
    { name: "Андрей Карев", date: "22:48", text: "говно", id: "6" },
    { name: "Андрей Карев", date: "22:48", text: "приколямба", id: "7" },
    { name: "Андрей Карев", date: "22:48", text: "говно", id: "8" },
    { name: "Андрей Карев", date: "22:48", text: "говно", id: "9" },
];

let messageAdd = (name, text, id) => {
    messagesArr.push({ name, date: getTime(), text, id });
    renderer(state);
};

let postsArr = [
    { id: "1", postSenderName: "Андрей Карев", postSendDate: "30.03.2020", postMessage: "От тебя соцсеть говниной пахнет, удали страницу" },
    { id: "2", postSenderName: "Андрей Карев", postSendDate: "30.03.2020", postMessage: "Ты пидарас" },
    { id: "3", postSenderName: "Андрей Карев", postSendDate: "30.03.2020", postMessage: "Анимешники пидары" },
    { id: "4", postSenderName: "Андрей Карев", postSendDate: "30.03.2020", postMessage: "Три дня создавал страницу на гитхабе" },
    { id: "5", postSenderName: "Андрей Карев", postSendDate: "30.03.2020", postMessage: "Если мы будем вместе делать проект - ты будешь уборщиком в моей компании" },
    { id: "6", postSenderName: "Андрей Карев", postSendDate: "30.03.2020", postMessage: "Кусок аштиэмэля" }
];

let postAdd = ({postSenderName, postMessage, id = "15"}) => {
    postsArr.unshift({ postSenderName, postSendDate: getDate(), postMessage, id });
    renderer(state);
};

let state = {
    profilePage: { postsState: {
        postsArr,
        postAdd
    } },
    messagesPage: {
        dialogsArr,
        messagesState: {
            messagesArr,
            messageAdd
        }
    }
};





export default state;

