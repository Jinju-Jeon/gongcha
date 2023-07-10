import { configureStore, createSlice } from "@reduxjs/toolkit";

const order = createSlice({

    name: 'order',
    initialState: [],

    reducers: {
        addItem(state,action){
            console.log(action.payload)
        }

    },
})

export const {addItem} = order.actions


export default configureStore({
    reducer: {
        order: order.reducer
    }
})