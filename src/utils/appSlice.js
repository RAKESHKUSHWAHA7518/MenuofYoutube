 import { createSlice } from"@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {

        isManuOpen:true,
    },
    reducers: {
        toggleMenu:(state) =>{
            state.isManuOpen = !state.isManuOpen;
        }
    }

})
 export const {toggleMenu} = appSlice.actions
 export default appSlice.reducer;