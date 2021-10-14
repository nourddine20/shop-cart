import react,{connect} from "react";
import item5 from "../images/tshirt5.jpg"
import { addproducttocart } from "../APIs/main";
import { addToCart } from "../Actions";
import { useDispatch } from "react-redux";

function Product({product_data}){
     const dispatch = useDispatch();
     
     function additemtocart(){
        
         addproducttocart(product_data)
        dispatch(addToCart(product_data.id,product_data))
   
    }
   
    return (
        <div className="product">
           <img src={product_data.image}/>
            <div className="info_product m-2">
            <h4>{product_data.title}</h4>
            <span>{product_data.price} $</span>
            </div>

            <button onClick={()=>additemtocart(product_data.id,product_data)} className="addtocart">Add To Cart</button>
        </div>
    )
}

// function mapdispatchtoprops(dispatch){
//     return{
//         additemtocart:(id)=>{dispatch({type:"addToCart",payload:id})}
//     }
// }

// export default connect(null,mapdispatchtoprops)(Product)

export default Product