import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
//import {Router,Route,IndexRoute,Link,IndexLink,history,hashHistory} from 'react-router';
// import History,{ createHistory, useBasename } from 'history'
// import createHistory from 'history/createBrowserHistory'

import App from './src/app.js'
import './src/less/index.scss';


render(<App />, document.querySelector("#content"));
	
//render(<App />,document.querySelector('#content'))