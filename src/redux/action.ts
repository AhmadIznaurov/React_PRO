export const loadList = () => {
    return (dispatch): void => {
        dispatch({type: "load/list/start"})
        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=50")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "load/list/fulfilled",
                    payload: json,
                });
            });
    };
};


export const deleteList = (id: number) => {
    return (dispatch): void => {
        dispatch({type: 'delete/list/start', payload: id})
        fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=50${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: 'delete/list/fulfilled',
                    payload: id
                })
            })
    }

}


export const addOnchangeClick = (id: number) => {
    return (dispatch): void => {
        dispatch({type: 'add/load/start'})
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
               item: 'id'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: 'add/load/success',
                    payload: id
                })
            })

    }

}

export  const loadUsers = () => {
    return (dispatch): void => {
        dispatch({type: "load/users/start"})
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "load/users/fulfilled",
                    payload: json,
                });
            });
    };
}