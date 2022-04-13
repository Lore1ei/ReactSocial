// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialoges/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {


    return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav state={props.state.navBar} />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={<Profile state={props.state.profilePage}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>} />
                    <Route path='/news' element={<News />}/>
                    <Route path='/music' element={<Music />}/>
                    <Route path='/settings' element={<Settings />}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
