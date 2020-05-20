import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import DefaultLayout from "./DefaultLayout";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

window.onscroll = () => scrollFunction();
let scrollFunction = () => {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("header").style.height = "80px";
    } else {
        document.getElementById("header").style.height = "160px";
    }
};

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <DefaultLayout/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();