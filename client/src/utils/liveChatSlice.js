import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_LIMIT } from "../components/constants";

const liveChatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessages : (state, action) =>{
            state.messages.unshift(action.payload)
            state.messages.splice(LIVE_CHAT_LIMIT,1);
        }
    }
})

export const {addMessages} = liveChatSlice.actions;
export default liveChatSlice.reducer;