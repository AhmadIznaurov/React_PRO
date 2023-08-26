import {Dispatch} from "react";
import {PhotoAction, PhotosActionType} from "../../types";

export const loadList = () => {
    return (dispatch: Dispatch<PhotoAction>): void => {
        dispatch({type: PhotosActionType.FETCH_PHOTOS})
        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=50")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: PhotosActionType.FETCH_PHOTOS_SUCCESS,
                    payload: json,
                });
            });
    };
};
export const deleteList = (id: number) => {
    return (dispatch: Dispatch<PhotoAction>): void => {
        dispatch({type: PhotosActionType.FETCH_DELETE, payload: id})
        fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=50${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: PhotosActionType.FETCH_DELETE_SUCCESS,
                    payload: id
                })
            })
    }

}
export const addOnchangeClick = (id: number) => {
    return (dispatch: Dispatch<PhotoAction>): void => {
        dispatch({type: PhotosActionType.FETCH_ONCHANGE, payload: id})
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
               item: 'id',
            }),

        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: PhotosActionType.FETCH_ONCHANGE_SUCCESS,
                    payload: id
                })
            })

    }

}
export  const loadUsers = () => {
    return (dispatch: Dispatch<PhotoAction>): void => {
        dispatch({type: PhotosActionType.FETCH_USER})
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: PhotosActionType.FETCH_USER_SUCCESS,
                    payload: json,
                });
            });
    };
}