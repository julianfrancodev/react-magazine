import React from 'react'

import firebase, { FirebaseContext } from './firebase/';
import useAuth from './hooks/useAuth';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/Home';
import Popular from './pages/Popular';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import CreatePost from './pages/CreatePost';

export default function App() {

    const user = useAuth();

    return (
        <FirebaseContext.Provider
            value={{ firebase, user }}
        >
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Popular">
                        <Popular />
                    </Route>
                    <Route exact path="/Profile">
                        <Profile />
                    </Route>
                    <Route exact path="/Settings">
                        <Settings />
                    </Route>
                    <Route exact path="/CreatePost">
                        <CreatePost />  
                    </Route>
                </Switch>
            </Router>
        </FirebaseContext.Provider>
    )
}
