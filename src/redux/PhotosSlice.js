import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  photos: [],
  loading: false,
}

export const loadList = createAsyncThunk(
  "load/list/start",
  async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/photos')
   const data = response.json()

  return data
  }
)


export const deleteList = createAsyncThunk(
  'delete/list/start',
      async( {id}) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos/${id}', {
        method: 'DELETE'
      })
        return response.json()
      }
)

export const addOnchangeClick = createAsyncThunk(
  'add/load/start',
  async ({id}) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/${id}', {
      method: 'PATCH',
      body: JSON.stringify({
        item: 'id'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  return response.json()
  }
)


export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
     builder
       .addCase(loadList.pending, (state) => {
         state.loading = true
       })
       .addCase(loadList.fulfilled, (state, action) => {
         state.loading = false
         state.photos = action.payload
       })
       .addCase(deleteList.pending, (state, action) => {
           const {id} = action.meta.arg
           state.photos = state.photos.map(list => {
           if(list.id === id) {
             return {
               ...list,
               deleting: true
             }
           }
           return list
         })
       })
       .addCase(deleteList.fulfilled, (state, action) => {
           state.photos = state.photos.filter((list) => list.id !== action.payload)
       })
       .addCase(addOnchangeClick.pending, (state, action) => {
             const {id} = action.meta.arg
             state.photos = state.photos.map((list) => {
           if (list.id === id) {
             return  {
               ...list,
               checking: true
             }
           }
           return list;
         })
       })
       .addCase(addOnchangeClick.fulfilled, (state, action) => {
         state.photos = state.photos.map((list) => {
           if (list.id === action.payload) {
             return  {
               ...list,
               completed: !list.completed,
               checking: false
             }
           }
           return list;
         })
       })
  }
})


export default photoSlice.reducer