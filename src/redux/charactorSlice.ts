import { createSlice } from "@reduxjs/toolkit";

export interface charactorStateType{
    position:[number,number,number];
    velocity:[number,number,number];
}

const initialState:charactorStateType = {
    position:[0,0.2,5],
    velocity:[0,0,0]
}

const charactorSclice = createSlice({
    name:'charactor',
    initialState,
    reducers:{
        arrowup:(state)=>{
            state.velocity = [0,0,0.1]; //z 축 앞으로
        },
        arrowdown:(state)=>{
            state.velocity = [0,0,-0.1]; //z축 뒤로
        },
        arrowleft:(state)=>{
            state.velocity = [-0.1,0,0]; //x축 왼쪽
        },
        arrowright:(state)=>{
            state.velocity = [0.1,0,0]; //x축 오른쪽
        },
    },
})


export const {arrowup,arrowdown,arrowleft,arrowright} = charactorSclice.actions;
export default charactorSclice.reducer;