import React,{Component} from 'react';
import {IndexLink,Link} from 'react-router';
import Img_index from '../img/ico1.png';
import Img_order from '../img/ico2.png';
import Img_center from '../img/ico3.png';


export default class Footer extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return 
               <div className="tab-wrap">
		               	   <li>
		               	      <IndexLink to="/">
		               	      {/*
			               	   	  <img src={Img_index} />
			               	   */}
			                      <i>贷款客户</i>
		                      </IndexLink>
		               	   </li>
		               	   <li>
		               	      <Link to="/myorder">
			               	   	  {/*
			               	   	  <img src={Img_index} />
			               	   */}
			                      <i>我的客户</i>
		                      </Link>
		               	   </li>
		               	   <li>
		               	      <Link to="/center">
			               	   	 {/*
			               	   	  <img src={Img_index} />
			               	   */}
			                      <i>个人中心</i>
		                      </Link>
		               	   </li>
               </div>
	}
}