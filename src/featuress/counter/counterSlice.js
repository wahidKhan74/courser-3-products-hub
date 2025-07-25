import { createSlice } from "@reduxjs/toolkit"

// step 1: define intial state
const initialState = {
    count : 0
}

// create slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        increament : state => { state.count+=1 },
        decrement : state => { state.count-=1 },
        reset : state => { state.count=0 },
    }
});

export const { increament , decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;