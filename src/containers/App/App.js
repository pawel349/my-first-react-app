import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import './App.css'
import Scroll from '../../components/Scroll/Scroll'
import ErrorBoundry from "../../components/ErrorBoundary/ErrorBoundry";

//https://jsonplaceholder.typicode.com/users

function App() {
    
    const [robots, setRobots] = useState([]);
    const [searchfiled, setSearchfield] = useState('')
    const [count, setCount] = useState(0,)

    const onSearchChange = async event=>{
        setSearchfield(event.target.value);
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users=>{setRobots(users)})
    }, []);
    
    
    const robotFiltered = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfiled.toLowerCase())
    });

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>

            <SearchBox searchChange={onSearchChange}/>
            <Scroll>    
                <ErrorBoundry>
                    <CardList robots={robotFiltered}/>  
                </ErrorBoundry>
            </Scroll>
      </div>
    );


   
    
}


export default App