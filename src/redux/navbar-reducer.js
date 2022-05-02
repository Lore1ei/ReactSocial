let initialState = {
    nav: [
        {path: '/', title: 'Profile'},
        {path: '/dialogs', title: 'Messages'},
        {path: '/news', title: 'News'},
        {path: '/music', title: 'Music'},
        {path: '/settings', title: 'Settings'},
    ],
    friends: [
        {img: '/img/1.jpg', name: 'Alex'},
        {img: '/img/2.jpg', name: 'Andrew'},
        {img: '/img/3.jpg', name: 'Asuka'},
    ],
}

const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;