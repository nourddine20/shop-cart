import axios from "axios"

export const  getallproducts = async ()=>{
    let data = await axios.get("https://fakestoreapi.com/products");

    return data
}


export const addproducttocart=async (item)=>{
   await axios.post("https://fakestoreapi.com/carts/1",item);
}
