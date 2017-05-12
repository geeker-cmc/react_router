import React,{Component} from 'react';
import Header from './header.js'

export default class Index extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (

              <div style={{flex:1}}>

                  <Header />
              </div>
			)
	}
}