import React from "react";
import {useState} from "react";
 
function Main(){
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);
    return(
        <main>
            <h2>Main section here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam voluptatum, quam possimus sit reprehenderit aliquid recusandae quae dignissimos soluta explicabo harum? Totam sunt laborum nihil, eius quis quia. Officiis.</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>
                ClickMe!
            </button>
        </main>
    )
}



export default Main;