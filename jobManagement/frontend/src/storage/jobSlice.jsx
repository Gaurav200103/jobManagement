import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  
}

export const addUser = createAsyncThunk("adduser", async (user)=>{
  const res = await axios.post("http://localhost:3000/register", user);
  return res.data;
})

export const loginUser = createAsyncThunk("loginUser", async(user)=>{
  const res = await axios.post("http://localhost:3000/login", user);

  localStorage.setItem("token", res.data.token);
  return res.data;
})

const jobSlice = createSlice({
  name:"recipe",
  initialState,
  reducers:{
    
  },
  extraReducers: (builder)=>{
    builder.addCase(addUser.fulfilled, (state,action)=>{
      console.log(action.payload);

    }),
    builder.addCase(loginUser.fulfilled, (state, action)=>{
      console.log(action.payload);
    })
  }
})

export default jobSlice.reducer;