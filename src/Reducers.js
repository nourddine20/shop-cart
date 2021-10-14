import { addToCart } from "./Actions"
import * as Types from "./Types"
const intialstatecrudcart = {
    cartnumbers:0,
    products:[],
    cartitems:[]

}
export const crudcart=(state=intialstatecrudcart,action)=>{
    switch(action.type){
        case Types.addToCart:
            let itemed={};
            console.log("before cartitem",state.cartitems)
            if(state.cartitems.length>0){
                state.cartitems.map((ele)=>{
                   if(ele.id !=action.payload.id){
                    itemed=action.payload.element
                   } 
                });
                console.log("item",itemed);
                
            }else{
                itemed={}
            }
            // let arryitems
            //  arryitems=[...arryitems,action.payload.element];
            //  console.log("arru",arryitems)
            
                return {...state,cartitems:[...state.cartitems,itemed],
                cartnumbers:state.cartnumbers+1};
                
        case Types.setProducts:
        return {...state,products:action.payload};
        default: 
         return state;
         
    }
}