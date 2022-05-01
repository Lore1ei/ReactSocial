const ADD_MESSAGE_DIALOG = 'ADD-MESSAGE-DIALOG';
const CHANGE_DIALOG_TEXT = 'CHANGE-DIALOG-TEXT';

const dialogsReducer = (state, action) => {

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