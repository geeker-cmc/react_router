import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
//import {Router,Route,IndexRoute,Link,IndexLink,history,hashHistory} from 'react-router';
// import History,{ createHistory, useBasename } from 'history'
// import createHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Index from './page/client/index.js';
import MyOrder from './page/myorder/index.js';
import Center from './page/center/index.js';
import Img_index from './img/ico1.png';
import Img_order from './img/ico2.png';
import Img_center from './img/ico3.png';
import Img_index_t from './img/ico11.png';
import Img_order_t from './img/ico22.png';
import Img_center_t from './img/ico33.png';

import Header from './component/header.js'
const customHistory = createBrowserHistory()


export default class Wrapper extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  		flag:"index",
	  		title:'贷款客户'
	  };
	}
	handleClick(e){
		let temp={'index':'贷款客户','order':'我的客户','center':'个人中心'}[e.currentTarget.getAttribute('data-flag')]
		this.setState({
			flag:e.currentTarget.getAttribute('data-flag'),
			title:temp
		})
	}
	render(){
		return (
			<Router history={customHistory}>
            <div className="wrapper">
                <Header title={this.state.title} />
     			<Route exact path="/" component={Index}   />
     			<Route path="/myorder" component={MyOrder} />
     			<Route path="/center" component={Center} />
     			<ul className="tabs">
		        <li>
		          <NavLink exact to="/" activeClassName="selected" onClick={this.handleClick.bind(this)} data-flag="index">
		                <img src={this.state.flag=="index"?Img_index_t:Img_index} />
		          		<i>贷款客户</i>
		          </NavLink>

		        </li>
		        <li>
		           <NavLink to="/myorder" activeClassName="selected" onClick={this.handleClick.bind(this)} data-flag="order"> 
		               <img src={this.state.flag=="order"?Img_order_t:Img_order} />
		               <i>我的客户</i>
		            </NavLink>
		        </li>
		        <li>
		        	<NavLink to="/center" activeClassName="selected" onClick={this.handleClick.bind(this)} data-flag="center">
		        	    <img src={this.state.flag=="center"?Img_center_t:Img_center} />
		        	    <i>个人中心</i>
		        	</NavLink>
		        </li>
		        </ul>
     		</div>
        </Router>
			)
	}
}