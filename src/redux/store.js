// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import navbarReducer from "./navbar-reducer";
//
// let store = {
//     _state : {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hello', countLike: 11},
//                 {id: 2, message: 'Holla', countLike: 23},
//                 {id: 3, message: 'Hi', countLike: 13},
//                 {id: 4, message: 'Nice', countLike: 232},
//             ],
//             newPost: '',
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'Hi, How are you today?'},
//                 {id: 3, message: 'Nice to meet you!'},
//                 {id: 4, message: 'Hello'},
//                 {id: 5, message: 'Hello'},
//                 {id: 6, message: 'Hello'},
//             ],
//             newPost: '',
//             dialogs: [
//                 {path: 1, name: 'Alexandr', message: 'Hello', img: '/img/1.jpg'},
//                 {path: 2, name: 'Oleg', message: 'Hi, How are you today?', img: '/img/2.jpg'},
//                 {path: 3, name: 'Igor', message: 'Nice to meet you!', img: '/img/3.jpg'},
//                 {path: 4, name: 'Andrey', message: 'Hello', img: '/img/4.jpg'},
//                 {path: 5, name: 'Svetlana', message: 'Hello', img: '/img/5.jpg'},
//                 {path: 6, name: 'Artyom', message: 'Hello', img: '/img/6.jpg'},
//             ],
//         },
//         navBar: {
//             nav: [
//                 {path: '/', title: 'Profile'},
//                 {path: '/dialogs', title: 'Messages'},
//                 {path: '/news', title: 'News'},
//                 {path: '/music', title: 'Music'},
//                 {path: '/settings', title: 'Settings'},
//             ],
//             friends: [
//                 {img: '/img/1.jpg', name: 'Alex'},
//                 {img: '/img/2.jpg', name: 'Andrew'},
//                 {img: '/img/3.jpg', name: 'Asuka'},
//             ],
//         },
//     },
//     _callSubscriber ()  {
//         console.log('state');
//     },
//
//     getState(){
//       return this._state;
//     },
//     subscribe (observer){
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action){
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.navBar = navbarReducer(this._state.navBar, action);
//         this._callSubscriber(this._state);
//
//     }
// }
//
// export default store;