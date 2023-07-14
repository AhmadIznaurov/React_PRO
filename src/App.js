import React, {useEffect, useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {addOnchangeClick, deleteList, loadList, loadUsers} from "./redux/action";
import ReactLoading from 'react-loading';
import {Lists} from "./components/Lists";



const App = () => {

    const loading = useSelector((state) => state.loading)

    const [isLoading, setIsLoading] = useState(false);
    const loadingUsers = useSelector((state) => state.loadingUsers)
    const waiting = loading || loadingUsers
    const dispatch = useDispatch()

    const [selectedItems, setSelectedItems] = useState([]);


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

    const handleCheckboxChange = (itemId) => {
        setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(itemId)) {
                return prevSelectedItems.filter((id) => id !== itemId);
            } else {
                return [...prevSelectedItems, itemId];
            }
        });
    };

    const handleDelete = () => {
        const filteredList = list.filter(item => !selectedItems.includes(item.id));
        dispatch({ type: 'DELETE_ITEMS', payload: filteredList });
        setSelectedItems([]);
    };

    useEffect(() => {
        if (isLoading) {
            dispatch(loadList())
            dispatch(loadUsers())
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

            { waiting ? <Preloader /> : (

                <Lists handleRemove={handleRemove} handleChecked={handleChecked} />

                <ol>
                    {list.map(item => (


                                <li key={item.id}>
                                <input
                                    type="checkbox"
                                    checked={item.id % 2 === 1}
                                    onChange={() => handleChecked(item.id)}
                                />
                                    {item.id || (
                                        <ReactLoading
                                            type={"spokes"}
                                            color={"blue"}
                                            height={20}
                                            width={20}
                                        />
                                    )}
                                {item.url}
                                <button className="button"
                                        onClick={() => handleRemove(item.id)}
                                        disabled={item.deleting}>Delete</button>
                                    {item.deleting && (
                                        <ReactLoading
                                            type={"balls"}
                                            color={"green"}
                                            height={32}
                                            width={32}
                                        />
                                    )}
                                </li>
                        <li key={item.id}>
                            <input
                                type='checkbox'
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                            {item.url}
                            <button className='button' onClick={handleDelete}>
                                Delete
                            </button>
                        </li>

                    ))}
                </ol>

            )}
        </div>
    );
}

export default App;

