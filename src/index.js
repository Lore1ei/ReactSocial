import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import state, {addMessageDialog, addPost, ChangeDialogText, ChangePostText, subscribe} from "./redux/state";
import App from "./App";


let renderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} ChangePostText={ChangePostText} addMessageDialog={addMessageDialog} ChangeDialogText={ChangeDialogText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(state);
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
