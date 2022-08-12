
import { addClass } from "../../Css/attClass/add.att.js";
import { removeClass } from "../../Css/attClass/remove.att.js";


/**
 * fetch data in type string and to params in url
 * @param {Object} obj  and element and name class  for amination [ element , name class ]
 * @return {Object | undefined} Promise resolved when data is fetched
 * 
 */

const fetchDataString = async ({ url, el = undefined, nameClass = undefined }) => {


  try {

    const check = el instanceof Element && typeof nameClass === "string";

    if (check)
      addClass({ el, nameClass });

    return await fetch(url)
      .then((response) => response.json())
      .then((data) => { return data; })
      .catch((error) => { console.log(error) })
      .finally(() => {
        if (check)
          removeClass({ el, nameClass });
      })
  } catch (err) {
    throw err;
  };

}


export {
  fetchDataString,
}