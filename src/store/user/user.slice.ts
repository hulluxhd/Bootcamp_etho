import { createSlice } from "@reduxjs/toolkit";
import reducers from "./user.reducer"

const initialState = {
    authenticated: false
}

const userSlice = createSlice({
    name: 'user',
    reducers,
    initialState
})

export default userSlice;