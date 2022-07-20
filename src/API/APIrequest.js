import axios from "axios";

   async function getProducts() {
    const response = await axios.get('http://localhost:5000/characters');
       console.log(response.data);
       return response.data;
}

export default getProducts;
   