import axios from "axios";

 

   async function getProducts() {
    const response = await axios.get('http://localhost:5000/characters');
       console.log(response.data);
       return response.data;
}

export default getProducts;
   
   /* const apiRequest = async () => {
        await axios.get('http://localhost:5000/characters')
            .then(res => {
                return data = res.data
            })
            
        }
    */
      

           /*export default function getProducts(){
  axios.get('http://localhost:5000/characters').then((response) => {
    console.log("response",response);
    return response.data;
  });
    }
    */