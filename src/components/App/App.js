import React, { Component } from "react";
import CardList from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";
import './App.css'

//https://jsonplaceholder.typicode.com/users

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchFiled: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=>this.setState({robots: users }))
    }

    onSearchChange=(event)=>{
        this.setState({ searchFiled: event.target.value })
    }

    render(){
        const robotFiltered = this.state.robots.filter(robots=>
            robots.name.toLowerCase().includes(this.state.searchFiled.toLowerCase()));

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={robotFiltered}/>    
          </div>
        );
    }
    
}


export default App