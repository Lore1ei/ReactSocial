import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {path: 1, name: 'Alexandr'},
    {path: 2, name: 'Misha'},
    {path: 3, name: 'Andrey'},
    {path: 4, name: 'Igor'},
    {path: 5, name: 'Tatyana'},
    {path: 6, name: 'Oleg'},
];

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi, How are you today?'},
    {id: 3, message: 'Nice to meet you!'},
    {id: 4, message: 'Hello'},
    {id: 5, message: 'Hello'},
    {id: 6, message: 'Hello'},
];

let posts = [
    {id: 1, message: 'Hello', countLike: 11},
    {id: 2, message: 'Holla', countLike: 23},
    {id: 3, message: 'Hi', countLike: 13},
    {id: 4, message: 'Nice', countLike: 232},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} post={posts}/>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
