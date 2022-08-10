
/**
 * fetch data in type string 
 * @param {Object} obj url and name input and value serch and element for amination
 * 
 */

const fetchDataString_1 = async ({ url, name, value, amination = undefined }) => {

   try{
       url = url + "get/"
       console.log({ url, name, value, amination });
    fetch("")

   }catch(err){
        throw err;
   };


}


export {
    fetchDataString_1,
}