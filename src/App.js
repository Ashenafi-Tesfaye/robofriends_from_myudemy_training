import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component{

	constructor(){
		super()
		this.state = {
			robots: [],
	        searchField:''
		}

	}
 
 componentDidMount(){
 	fetch('https://jsonplaceholder.typicode.com/users')
 	  .then(response=> response.json())
 		.then(users=>this.setState({robots:users}));
 	}

 onSearchChange=(event)=>{
    this.setState({searchField:event.target.value})
   }
 
 

	render (){
		const {robots,searchField}=this.state;
		const filterRobots=robots.filter
 	(robots=>{
 		return robots.name.toLowerCase().includes(searchField.toLowerCase())
 	})
 	if(robots.length===0){
 		return <h1>Loading</h1>
 	}
 	else{
	return(
		  <div className='tc'>
		  <h1 className='f1'>Robofriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			   <CardList robots={filterRobots}/>
			</Scroll>
		   </div>
		);
	}
}
}

export default App;