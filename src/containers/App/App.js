import React, { Component } from "react";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import './App.css'
import Scroll from '../../components/Scroll/Scroll'
import ErrorBoundry from "../../components/ErrorBoundary/ErrorBoundry";

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
        const {robots, searchFiled} = this.state;
        const robotFiltered = robots.filter(robots=>
            robots.name.toLowerCase().includes(searchFiled.toLowerCase()));

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>

                <Scroll>    
                    <ErrorBoundry>
                        <CardList robots={robotFiltered}/>  
                    </ErrorBoundry>
                </Scroll>
          </div>
        );
    }
    
}


export default App