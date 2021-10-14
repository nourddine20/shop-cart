import react, { useState } from "react";
import { connect } from "react-redux";
import "./Navbar.css"

function Navbar({cartnumbers,cartitems=[]}){
        const [clickedcart,setclickedcart] = useState(false);
       
    return (

        <header>
          {console.log("item of cart",cartitems)}
        <div className="container py-5">
          <nav className="p-3">
              <h2>Shop</h2>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#" onClick={()=>setclickedcart(true)} className="cart">Cart <span>{cartnumbers}</span></a></li>
              </ul>
          </nav>
          
        </div>
         
        {clickedcart && <div className="cart_box py-3 px-3">
              {cartitems.length > 0 ? <ul>
                {console.log("cartitems",cartitems)}
                  {cartitems.map((item)=>{
                      return <li key={item.id} className="my-1">
                      
                        <div className="preview_item">
                        <img src={item.image}/>
                       
                        <h5>{item.title}</h5>
                        </div>
                       
                        {/* <span>{}</span> */}
                      </li>
                  })
                  
                  }
                 
                </ul>:"Your Cart is Empty"
                }
               
         </div> }
      {/* <div className="overlay"></div> */}
         
      </header>


    )
}

const mapstatetoprops =(state)=>{
  return{
      cartnumbers:state.crudcart.cartnumbers,
      cartitems:state.crudcart.cartitems,
      
  }
}

export default connect(mapstatetoprops)(Navbar);

