const FOLLOW = 'FOLLOW';
const GET_MORE_USERS = 'GET-MORE-USERS';

let initStore = {
    usersArr: [
        { id: "2", name: "Андрей Карев", status: "Ебашу твой код", city: "Куровское City", follow: true, profilePic: "https://sun9-72.userapi.com/c205624/v205624390/c8bfd/LV7Rou_eAPw.jpg" },
        { id: "3", name: "Даня Кондратьев", status: "Выучил HTML и выебываюсь", city: "Тагай The Megapollis", follow: false, profilePic: "https://sun9-42.userapi.com/c857020/v857020712/ea335/tiEFiNjeAqw.jpg" },
        { id: "4", name: "Юленька", status: "Придурки заставили меня рисовать майнкрафт", city: "Ульяновск", follow: true, profilePic: "https://sun9-25.userapi.com/c856524/v856524939/15ec82/3ORlhYLjuJI.jpg" }
    ]
};

const profileReducer = (state = initStore, action) => {
    
    let stateCopy;

    switch (action.type) {
        case GET_MORE_USERS:
            debugger
           return {
                ...state,
                usersArr: [...state.usersArr, ...action.usersArr]
            };
        case FOLLOW:
            stateCopy = {                
                ...state,
                usersArr: [...state.usersArr]
            }

            for (let user of state.usersArr){
                if(user.id === action.id){
                    user.follow = action.follow;
                    break;
                }
            }

            return stateCopy;                
        default:
            return state;
    }
}


export const followActionCreator = (userId, follow) => ({ type: FOLLOW, id: userId, follow});
export const getMoreUsersActionCreator = (usersArr) => ({type: GET_MORE_USERS, usersArr});
export default profileReducer;