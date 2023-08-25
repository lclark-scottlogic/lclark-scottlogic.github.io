import { createSlice } from '@reduxjs/toolkit'
const initialState={
    history:[{squares:Array(9).fill(null)}],
    stepNumber:0,
    xIsNext:true,
}
const gameSlice=createSlice({
    name:'game',
    initialState,
    reducers:{
        setHistory(state,action){
           state.history=action.payload
        },
        setXIsNext(state,action){
            state.xIsNext=action.payload
        },
        setStepNumber(state,action){
            state.stepNumber=action.payload
        }

    }
})
export const{setXIsNext,setStepNumber,setHistory}=gameSlice.actions
export default gameSlice.reducer
