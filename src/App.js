import React, {useEffect, useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {addOnchangeClick, deleteList, loadList} from "./action";
import ReactLoading from 'react-loading';



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
                 <div className="preloader">
                     <ReactLoading type={'spin'} color={'red'} height={200} width={200} />
                 </div>
             );
         }

    useEffect(() => {
        if (isLoading) {
            dispatch(loadList())
        }
    }, [isLoading])


    const handleRemove = (id) => {
        dispatch(deleteList(id))
    }

    const handleChecked = (id) => {
        dispatch(addOnchangeClick(id))
    }

    return (
        <div className="App">
            <button onClick={handleClick}>TOUCH HERE</button>
            {loading ? <Preloader /> : (
                <ol>
                    {list.map(item => (

                                <li key={item.id}>
                                <input
                                    type="checkbox"
                                    checked={item.id % 2 === 1}
                                    onChange={() => handleChecked(item.id)}
                                />
                                {item.url}
                                <button className="button" onClick={() => handleRemove(item.id)}>Delete</button>
                                </li>

                    ))}
                </ol>
            )}
        </div>
    );
}

export default App;