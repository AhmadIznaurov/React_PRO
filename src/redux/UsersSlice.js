import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  users:[],
  loadingUsers: false
}

export const loadUsers = createAsyncThunk(
  "load/users/start",
   async () => {
     const response = await fetch('https://jsonplaceholder.typicode.com/users')

     return response.json()
   }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
         state.loadingUsers = true
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
          state.users = action.payload
          state.loadingUsers = false
      })
  }
})


export default userSlice.reducer