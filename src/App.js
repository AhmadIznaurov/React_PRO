import React, {useEffect, useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import ReactLoading from 'react-loading';
import {Lists} from "./components/Lists";
import { addOnchangeClick, deleteList, loadList } from './redux/PhotosSlice'
import {  loadUsers } from './redux/UsersSlice'



export const App = () => {

    const loading = useSelector((state) => state.photos.loading)
    const [isLoading, setIsLoading] = useState(false);
    // const loadingUsers = useSelector((state) => state.users.loadingUsers)  || loadingUsers
    const dispatch = useDispatch()
    const waiting = loading


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


    const handleChecked = (id, completed) => {
        dispatch(addOnchangeClick({id, completed}))
    }

    return (
        <div className="App">
            <button onClick={handleClick}>TOUCH HERE</button>
            { waiting ? <Preloader /> : (
                <Lists handleRemove={handleRemove} handleChecked={handleChecked} />
            )}
        </div>
    );
}



