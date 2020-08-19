import React from 'react'

import firebase, { FirebaseContext } from './firebase/';
import useAuth from './hooks/useAuth';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './pages/Home';
import Popular from './pages/Popular';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

export default function App() {

    const user = useAuth();

    return (
        <FirebaseContext.Provider
            value={{ firebase, user }}
        >
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/Popular">
                        <Popular />
                    </Route>
                    <Route path="/Profile">
                        <Profile />
                    </Route>
                    <Route path="/Settings">
                        <Settings />
                    </Route>
                </Switch>
            </Router>
        </FirebaseContext.Provider>
    )
}
