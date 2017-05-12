import React,{Component} from 'react';
import {Router,Route,IndexRoute,Link,IndexLink,history,hashHistory} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'


export default class Center extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (
              <div style={{flex:1}}>个人中心</div>
			)
	}
}