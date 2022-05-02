const ADD_MESSAGE_DIALOG = 'ADD-MESSAGE-DIALOG';
const CHANGE_DIALOG_TEXT = 'CHANGE-DIALOG-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi, How are you today?'},
        {id: 3, message: 'Nice to meet you!'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Hello'},
        {id: 6, message: 'Hello'},
    ],
    newPost: '',
    dialogs: [
        {path: 1, name: 'Alexandr', message: 'Hello', img: '/img/1.jpg'},
        {path: 2, name: 'Oleg', message: 'Hi, How are you today?', img: '/img/2.jpg'},
        {path: 3, name: 'Igor', message: 'Nice to meet you!', img: '/img/3.jpg'},
        {path: 4, name: 'Andrey', message: 'Hello', img: '/img/4.jpg'},
        {path: 5, name: 'Svetlana', message: 'Hello', img: '/img/5.jpg'},
        {path: 6, name: 'Artyom', message: 'Hello', img: '/img/6.jpg'},
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_DIALOG:
            let newPost = {
                id: 7,
                message: state.newPost,
            }
            state.messages.push(newPost);
            state.newPost = '';
            return state;
        case CHANGE_DIALOG_TEXT:
            state.newPost = action.newText;
            return state;
        default:
            return state;
    }
}

export const AddMessageDialogActionCreator = () => ({type: ADD_MESSAGE_DIALOG})
export const ChangeDialogTextActionCreator = (text) => ({type: CHANGE_DIALOG_TEXT, newText: text})

export default dialogsReducer;