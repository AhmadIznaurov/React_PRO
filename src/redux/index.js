import { configureStore } from '@reduxjs/toolkit';
import PhotoReducer from './PhotosSlice';
import UserReducer from './UsersSlice';

export const store = configureStore({
     reducer: {
       photos: PhotoReducer,
       users: UserReducer
     },
})