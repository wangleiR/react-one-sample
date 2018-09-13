import 'css-modules-require-hook/preset';
import express from "express";
import React from "react";
import {combineReducers, createStore} from "redux";
import {authenticationReducer} from "./reducers";
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from './components/homepage';
import AboutUs from './components/about-us';
import Navigation from './components/navigation';
import Login from './components/login-form';
import ClassList from './components/class-list';
import buildPath from '../build/asset-manifest.json';
import path from 'path';


const app = express();

const store = createStore(combineReducers({
    isAuthenticated: authenticationReducer
}));


app.use((request,response,next) => {
    if (request.url.startsWith('/static')){
         return next();
    }

    const appString = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={request.url}>
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/about" component={AboutUs} />
                        <Route path="/login" component={Login} />
                        <Route path="/classes" component={ClassList} />
                    </Switch>
                </div>
            </StaticRouter>
        </Provider>
    );

    console.log(appString);

    const html = `<html><div id="root">${appString}</div><script src="/${buildPath['main.js']}"></script></html>`;

    response.send(html);
});

app.use('/',express.static(path.resolve('build')));

app.listen('9000',()=>console.log("SSR Server Start"));