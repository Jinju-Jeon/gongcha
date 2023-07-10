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
        },

        editItem(state,action){
            const editted = action.payload
            const eState = state[editted.index]

            eState.item = editted.item
            eState.cup = editted.cup
            eState.ice = editted.ice
            eState.sugarSelect = editted.sugarSelect
            eState.topping = editted.topping
            eState.quant = editted.quant
            eState.onePrice = editted.onePrice
        }

    },
})

export const {addItem, deleteItem, deleteAll, editItem} = order.actions


export default configureStore({
    reducer: {
        order: order.reducer
    }
})