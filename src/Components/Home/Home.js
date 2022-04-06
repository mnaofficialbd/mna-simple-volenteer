import React, { useState } from 'react';

const Home = () => {
    const [count,setCount]=useState(0);
    const number=56;
    const increaseCount=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <h2>This is Home</h2>
            <button onClick={increaseCount}>Click</button>
            <p>Count: {count}</p>
            <p>My Number: {number}</p>
            <p>Count: {count}</p>
            <p>Double Count: {count*2}</p>
        </div>
    );
};

export default Home;