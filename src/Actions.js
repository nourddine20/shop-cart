import * as Types from "./Types"
export const addToCart=(itemId,item)=>{
    return {
        type:Types.addToCart,
        payload:{
            id:itemId,
            element:item
        }
    }
}

export const setProducts = (products)=>{
    return{
        type:Types.setProducts,
        payload:products
    }
}