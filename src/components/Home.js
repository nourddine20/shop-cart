import react,{useEffect} from "react";
import "./Home.css"
import Product from "./Product";
import item1 from "../images/tshirt1.jpg"
import item2 from "../images/tshirt2.jpg"
import item3 from "../images/tshirt3.jpg"
import item4 from "../images/tshirt4.jpg"
import item5 from "../images/tshirt5.jpg"
import { connect, useDispatch } from "react-redux";
import { getallproducts } from "../APIs/main";
import { setProducts } from "../Actions";


function Home({allproducts}){
    const dispatch = useDispatch()
    useEffect(() =>{
        
        getallproducts().then(e=>{
            console.log("data",e.data)
            dispatch(setProducts(e.data))
          
        })

        
        
    },[])

   
    return (

       <div className="box_home"> 
       {console.log("hello",allproducts)}
           <div className="container">
             
                    {
                        allproducts.length> 0 ? <div className="list-products row ">
                            {allproducts.map((itemdata)=>{
                               return <Product  key={itemdata.id} product_data={itemdata}/>
                            })}
                         </div> : "there is  not products"
                        
           
                    }
               
           </div>
           
       </div>

    )
}

// const mapdispatchtoprops= (dispatch) =>{
    
//     return{
//         setproducts:(items)=>{
//             dispatch(setProducts(items))
//         }
//     }
// }

const mapstatetoprops =(state)=>{
    return{
        allproducts:state.crudcart.products
    }
}

export default connect(mapstatetoprops)(Home)
