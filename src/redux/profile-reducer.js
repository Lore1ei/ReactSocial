const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPost,
                countLike: 0,
            };

            state.posts.push(newPost);
            state.newPost = '';
            return state;
        case CHANGE_POST_TEXT:
            state.newPost = action.newText;
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostTextActionCreator = (text) => ({type: CHANGE_POST_TEXT, newText: text})

export default profileReducer;