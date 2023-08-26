import React, {useEffect, useState} from 'react';
import './index.css'
import ReactLoading from 'react-loading';
import {Lists} from "./components/Lists";
import {useTypedSelector} from "./hooks";
import {useActions} from "./hooks/useActions";



export const App: React.FC = () => {

    const loading: boolean = useTypedSelector((state) => state.loading)
    const [isLoading, setIsLoading] = useState(false);
    const loadingUsers: boolean = useTypedSelector((state) => state.loadingUsers)
    const waiting: boolean = loading || loadingUsers
    const {addOnchangeClick, deleteList, loadList, loadUsers} = useActions()



    const handleClick = (): void => {
            setIsLoading(true);
            loadList();
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
            loadList()
            loadUsers()
        }
    }, [isLoading])


    const handleRemove = (id: number): void => {
           deleteList(id)
    }


    const handleChecked = (id: number): void => {
           addOnchangeClick(id)
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
