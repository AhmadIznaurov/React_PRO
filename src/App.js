import React, {useEffect, useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {addOnchangeClick, deleteList, loadList, loadUsers} from "./redux/action";
import ReactLoading from 'react-loading';
import {Lists} from "./components/Lists";



const App = () => {

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
            {loading ? <Preloader /> : (
                <Lists handleRemove={handleRemove} handleChecked={handleChecked} />
            )}
        </div>
    );
}

export default App;

