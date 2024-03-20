import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "./Products";

type TProductsState={
    products:TProducts,
    basket: TProducts
}

type TProduct = {
        id: number,
        price: number,
        img: string,
        title:string,
        quantity: number,
    }
type TProducts = TProduct[]

const initialState:TProductsState = {
    products:PRODUCTS,
    basket:[],
} 
const todoSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToBasket(state,action:PayloadAction<TProduct>){
            
           state.basket.push(action.payload)
        },
        removeFromBasket(state,action:PayloadAction<number>){
            state.basket = state.basket.filter(({id}) => id !== action.payload)
        },
    }
});

export const {addToBasket,removeFromBasket} = todoSlice.actions;
export const todo = todoSlice.reducer;