import { configureStore } from "@reduxjs/toolkit";
import  modeReducer  from "@redux/modeSlice"
import charactorReducer from "@redux/charactorSlice"

export const store = configureStore({
    reducer:{
        mode:modeReducer,
        charactor:charactorReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;