import React, { useState } from 'react';
import './index.css'


const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [list, setList] = useState([]);

    const handleClick = () => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {
                setList(data);
                setIsLoading(false);
            });
    }

    const Preloader = () => {
        return (
            <div className="preloader">Loading...</div>
        );
    }


    return (
        <div className="App">
            <button onClick={handleClick}>TOUCH HERE</button>

            {isLoading ? <Preloader /> : (
                <ol>
                    {list.map(item => (
                        <li key={item.id}>{item.url}</li>
                    ))}
                </ol>
            )}

        </div>
    );
}

export default App;
