import {configureStore} from '@reduxjs/toolkit'
import CardSlice from './CartSlice'
import ProductSlice from './ProductSlice'



const Store = configureStore({
  reducer:{
    cart: CardSlice,
    products: ProductSlice
  }
})
export default Store