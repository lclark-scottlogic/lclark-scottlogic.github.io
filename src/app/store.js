import { configureStore } from '@reduxjs/toolkit'
// import { setXIsNext,setStepNumber,setHistory } from './Slice'
import gameSlice from './Slice'

export default configureStore({
  reducer: {
    game: gameSlice
  },
})
