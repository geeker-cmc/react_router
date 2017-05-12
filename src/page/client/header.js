import React,{Component} from 'react';
import Header from './header.js'

export default class Index extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:['全部订单','贷款金额','订单排序','自定义']
	  };
	}
	render(){
		return (

             <ul style={{padding:0,display:'flex',justifyContent:'space-around',margin:0}}>
             	{
             		this.state.list.map(item=>{
             			return <li key={item} style={{listStyle:'none',fontSize:'.8rem'}}>{item}</li>
             		})
             	}
             </ul>
			)
	}
}