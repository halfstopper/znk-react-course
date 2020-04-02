import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RuleList from './RuleList';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store/app-store';


const domElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <RuleList />
    </Provider>
    ,domElement);

//From Day 1
//import rules from './data.json'
//import rulesApp from './reducers/rules-reducer';
//ReactDOM.render(<RuleList rules = {rules}/>, domElement);
//ReactDOM.render(<App/>, domElement);