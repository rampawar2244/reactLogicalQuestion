export const addToCart=(product)=>{
   console.log("actions", product);
    return {
        type:"ADD_To_Cart", 
        data:product
    }
}