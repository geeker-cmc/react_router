import React,{Component} from 'react';


export default class Header extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (
			<div style={{background:'#fa863e',color:'#fff',height:'1.5rem',textAlign:'center',lineHeight:'1.5rem'}}>{this.props.title}</div>
			)
	}
}