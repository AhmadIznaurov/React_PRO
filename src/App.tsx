import React, {useEffect, useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {addOnchangeClick, deleteList, loadList, loadUsers} from "./redux/action";
import ReactLoading from 'react-loading';
import {Lists} from "./components/Lists";



export const App: React.FC = () => {

    const loading = useSelector((state) => state.loading)
    const [isLoading, setIsLoading] = useState(false);
    const loadingUsers = useSelector((state) => state.loadingUsers)
    const waiting: boolean = loading || loadingUsers
    const dispatch = useDispatch()


    const handleClick = (): void => {
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


    useEffect((): void => {
        if (isLoading) {
            dispatch(loadList())
            dispatch(loadUsers())
        }
    }, [isLoading])


    const handleRemove = (id): void => {
        dispatch(deleteList(id))
    }


    const handleChecked = (id): void => {
        dispatch(addOnchangeClick(id))
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


//
//
//
