import {div} from 'prelude-ls';
import React, {Component} from 'react';
import './App.css';
import Header from '../src/components/Header/Header.jsx';
import Navbar from '../src/components/Navbar/Navbar.jsx';
import Profile from '../src/components/Profile/Profile.jsx';

import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redux/state";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={ () =>
                        <Profile profilePage={props.state.profilePage} addPost={addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/setting' render={ () => <Setting />}/>
                </div>
                {/*<Dialogs />*/}

            </div>
        </BrowserRouter>
    );
}

export default App;