let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', countLike: 11},
            {id: 2, message: 'Holla', countLike: 23},
            {id: 3, message: 'Hi', countLike: 13},
            {id: 4, message: 'Nice', countLike: 232},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hi, How are you today?'},
            {id: 3, message: 'Nice to meet you!'},
            {id: 4, message: 'Hello'},
            {id: 5, message: 'Hello'},
            {id: 6, message: 'Hello'},
        ],
        dialogs: [
            {path: 1, name: 'Alexandr', message: 'Hello'},
            {path: 2, name: 'Oleg', message: 'Hi, How are you today?'},
            {path: 3, name: 'Igor', message: 'Nice to meet you!'},
            {path: 4, name: 'Andrey', message: 'Hello'},
            {path: 5, name: 'Svetlana', message: 'Hello'},
            {path: 6, name: 'Artyom', message: 'Hello'},
        ],
    }

}

export default state;