import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import store from './store/app-store';
import Layout from "./Layout";

const domElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Layout} />
        </BrowserRouter>
    </Provider>
    ,domElement);