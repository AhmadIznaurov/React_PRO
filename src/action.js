export const loadList = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "load/list/fulfilled",
                    payload: json,
                });
            });
    };
};