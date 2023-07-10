export const loadList = () => {
    return (dispatch) => {
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


export const deleteList = (id) => {
    return (dispatch) => {
        dispatch({type: 'delete/list/start'})
        fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=50${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'delete/list/fulfilled',
                    payload: id
                })
            })
    }

}
