import {initialStateType, PhotoAction, PhotosActionType} from '../types'

const initilState: initialStateType = {
    photos: [],
    loading: false,


    users:[],
    loadingUsers: false
}


export const reducer = (state = initilState, action: PhotoAction) => {
    switch (action.type) {

        case PhotosActionType.FETCH_PHOTOS:
            return {
                ...state,
                loading: true
            }

        case PhotosActionType.FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                loading: false
            }

        case PhotosActionType.FETCH_DELETE:
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

        case PhotosActionType.FETCH_DELETE_SUCCESS:
            return {
                ...state,
                photos: state.photos.filter((list) => list.id !== action.payload)
            }

        case PhotosActionType.FETCH_ONCHANGE:
            return  {
                ...state,
                photos: state.photos.map((list) => {
                    if (list && list.id === action.payload) {
                        return  {
                            ...list,
                            id: !list.id,

                        }
                    }
                    return list;
                })
            }

        case PhotosActionType.FETCH_ONCHANGE_SUCCESS:
            return  {
                ...state,
                photos: state.photos.map((list) => {
                    if (list && list.id === action.payload) {
                        return  {
                            ...list,
                            id: !list.id,

                        }
                    }
                    return list;
                })
            }

        case PhotosActionType.FETCH_USER:
            return {
                ...state,
                loadingUsers: true
            }

        case PhotosActionType.FETCH_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            }

        default:
            return state;
    }
};