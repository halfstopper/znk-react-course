import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rules from './data.json'
import RuleList from './RuleList';
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App'

const domElement = document.getElementById('root');
ReactDOM.render(<RuleList rules = {rules}/>, domElement);
//ReactDOM.render(<App/>, domElement);