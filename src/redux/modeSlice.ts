import { createSlice } from "@reduxjs/toolkit";

//initial
export interface modeStateType { //type도 export 해줄 것
    value:`light`|`dark`
}

const initialState:modeStateType = {
    value:`dark`
}

//Slice
const modeSlice = createSlice({
    name:'mode',
    initialState,
    reducers:{
        toggle:(state)=>{
            state.value = state.value === `dark`? `light`:`dark`
        }
    },
})

export const {toggle} = modeSlice.actions;
export default modeSlice.reducer;