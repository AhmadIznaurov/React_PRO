export interface initialStateType {
    photos: any[]
    users: any[]
    loading: boolean
    loadingUsers: boolean
    deleting?: boolean
    completed?: boolean
}

export enum PhotosActionType {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_DELETE = 'FETCH_DELETE',
    FETCH_DELETE_SUCCESS = 'FETCH_DELETE_SUCCESS',
    FETCH_ONCHANGE = 'FETCH_ONCHANGE',
    FETCH_ONCHANGE_SUCCESS = 'FETCH_ONCHANGE_SUCCESS',
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
}

interface FetchPhotoAction {
    type: PhotosActionType.FETCH_PHOTOS
}

interface FetchPhotoSuccessAction {
    type: PhotosActionType.FETCH_PHOTOS_SUCCESS;
    payload: any[];
}

interface FetchDeleteAction {
    type: PhotosActionType.FETCH_DELETE;
    payload: number
}

interface FetchDeleteSuccessAction {
    type: PhotosActionType.FETCH_DELETE_SUCCESS;
    payload: number
}

interface FetchOnchangeAction {
    type: PhotosActionType.FETCH_ONCHANGE;
    payload: number
}

interface FetchOnchangeSuccessAction {
    type: PhotosActionType.FETCH_ONCHANGE_SUCCESS;
    payload: number
}

interface FetchUserAction {
    type: PhotosActionType.FETCH_USER;
}

interface FetchUserSuccessAction {
    type: PhotosActionType.FETCH_USER_SUCCESS;
    payload: any[]
}

export type PhotoAction =
    FetchPhotoAction
    | FetchPhotoSuccessAction
    | FetchDeleteAction
    | FetchDeleteSuccessAction
    | FetchOnchangeAction
    | FetchOnchangeSuccessAction
    | FetchUserAction
    | FetchUserSuccessAction