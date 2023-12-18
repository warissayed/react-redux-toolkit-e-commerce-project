
import {createSlice} from  '@reduxjs/toolkit'



const initialState = []

const CardSlice = createSlice({
  
   name: 'cart',
   initialState,
   reducers:{
          addToCart(state,action){
            state.push(action.payload)
          },
          remove(state,action){
            return state.filter(item => item.id !== action.payload)
           }
   },
  

})

export const {addToCart,remove} = CardSlice.actions;
export default CardSlice.reducer;