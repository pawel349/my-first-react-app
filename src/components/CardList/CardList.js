import React from "react";
import Card from "../Card/Card";

const CardList =({robots})=> {
    return (
        <div>
            {
                robots.map((user, i)=>{
                    return <Card 
                    key={i} 
                    id={user.id} 
                    name={user.name} 
                    userName = {user.userName} 
                    email={user.email}/>
                })
            }
        </div>        
    )
}
export default CardList;