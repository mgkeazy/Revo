import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen : true,
        isProfileOpen: false,
    },
    reducers: {
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) =>{
            state.isMenuOpen = 0;
        },
        toggleProfile : (state)=>{
            state.isProfileOpen = !state.isProfileOpen;
        }
    }
})

export const {toggleMenu, closeMenu, toggleProfile } = appSlice.actions;
export default appSlice.reducer;

