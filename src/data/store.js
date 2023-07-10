import { configureStore, createSlice } from "@reduxjs/toolkit";

const order = createSlice({

    name: 'order',
    initialState: [],

    reducers: {
        addItem(state,action){
            state.push(action.payload)
        },

        deleteItem(state,action){
            const index = action.payload
            state.splice(index,1)
        },

        deleteAll(state){
            state.length = 0
        }

    },
})

export const {addItem, deleteItem, deleteAll} = order.actions


export default configureStore({
    reducer: {
        order: order.reducer
    }
})