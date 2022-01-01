import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/posts">
                    <Posts />
                </Route>
                <Route path="/error">
                    <Error />
                </Route>
                <Redirect to="/error" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
