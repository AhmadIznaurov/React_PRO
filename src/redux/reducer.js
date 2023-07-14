


const initilState = {
    photos: [],
    loading: false,

    users:[],
    loadingUsers: false
}


export const reducer = (state = initilState, action) => {
    switch (action.type) {

        case 'load/list/start':
            return {
                ...state,
                loading: true
            }

        case 'load/list/fulfilled':
            return {
                ...state,
                photos: action.payload,
                loading: false
            }

        case 'delete/list/start':
            return {
                ...state,
                photos: state.photos.map(list => {
                    if(list.id === action.payload) {
                        return {
                            ...list,
                            deleting: true
                        }
                    }
                    return list
                })
            }

        case 'delete/list/fulfilled':
            return {
                ...state,
                photos: state.photos.filter((list) => list.id !== action.payload)
            }

        case 'add/load/success':
            return  {
                ...state,
                photos: state.photos.map((list) => {
                    if (list && list.id === action.payload) {
                        return  {
                            ...list,
                            id: !list.id
                        }
                    }
                    return list;
                })
            }

        case 'load/users/start':
            return {
                ...state,
                loadingUsers: true
            }


        case 'load/users/fulfilled':
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            }

        default:
            return state;
    }
};