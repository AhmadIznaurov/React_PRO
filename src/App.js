import React, {useEffect, useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {loadList} from "./action";


const App = () => {
    const list = useSelector((state) => state.photos);
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const loading = useSelector((state) => state.loading)

    const handleClick = () => {
            setIsLoading(true);
            dispatch(loadList());
    }

    const Preloader = () => {
                return (
                    <div className="preloader">Loading...</div>
                );
    }

    useEffect(() => {
        if (isLoading) {
            dispatch(loadList())
        }
    }, [isLoading])

    return (
        <div className="App">
            <button onClick={handleClick}>TOUCH HERE</button>

            {
                loading ? <Preloader /> : (
                    <ol>
                        {list.map(item => (
                            <li key={item.id}>{item.url}</li>
                        ))}
                    </ol>
                )
            }

        </div>
    );
}

export default App;