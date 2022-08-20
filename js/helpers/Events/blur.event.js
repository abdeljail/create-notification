
import { removeClass } from "../Css/attClass/remove.att.js"
import { hasClass } from '../Css/attClass/has.att.js'
import { addClass } from '../Css/attClass/add.att.js'





/**
 *  this method is  when the Element is add event listener  blur
 *  element required element to listener blur
 *  fun required function for excute on blur
 */

function blurElement({ element, fun }) {

    try {

        if (!element.localName) throw "required  tag name for element"

        if (!(typeof fun === "function")) throw "required in type function  "

        if (!fun.name) throw "required in name function and function is found"

        element.addEventListener("blur", fun);

    } catch (error) {
        throw new Error(error)
    }



}


/**
 *  this method is  when the Element is add event listener  blur
 *  element required element to listener blur
 *  fun required multiple function for excute on click in array 
 */


function blurElementFunctions({ element, functions }) {

    try {

        if (!element.localName) throw "required  tag name for element"

        if (!(functions instanceof Array)) throw "required in type array for functions"

        if (!functions.length) throw "required count in array > 0"

        functions.forEach((fun, idx) => {
            if (!(typeof fun === "function")) throw "required in type function in index : " + idx
            if (!fun.name) throw "required in name function and function is found"
            element.addEventListener("blur", fun);
        });

    } catch (error) {
        throw new Error(error)
    }

}


/**
 *  this method is add event blur in multiple elements and add same function
 *  elements required element to listener blur
 *  fun required function for excute on blur 
 */

function blurElements({ elements, fun }) {

    try {

        if (!(elements instanceof Array)) throw new Error("required in type array for elements")

        if (!elements.length) throw new Error("required count in element > 0")


        if (!typeof fun) throw new Error("required in type function ")

        if (!fun.name) throw new Error("required in name function and function is found")

        elements.forEach((element, idx) => {
            if (!element.localName) throw new Error("required  tag name for elements =>  is not defined elment in index : " + idx)
            element.addEventListener("blur", fun);
        });

    } catch (error) {
        throw new Error(error)
    }

}



/**
 *  this method is add event blur in multiple elements and add same function
 *  elements required element to listener blur
 *  fun required function for excute on blur 
 */

function blurElementsFunctions(array) {

    try {

        if (!(array instanceof Array)) throw "required in type array for elements"

        if (!array.length) throw "required count in array > 0"

        array.forEach((obj, idx) => {

            if (!(obj instanceof Object)) throw "required in type object in array"

            if (!Object.keys(obj).length) throw "required in  object in empty in index : " + idx

            const [element, fun] = Object.values(obj)

            if (!element.localName) throw "required  tag name for elements =>  is not defined elment in index : " + idx

            if (!(typeof fun === "function")) throw new Error("required in type function in index : " + idx)

            if (!fun.name) throw new Error("required in name function and function is found")

            element.addEventListener("blur", fun);
        });

    } catch (error) {
        throw new Error(error)
    }

}



/**
 *  this method is add event blur in multiple element and add same function
 *  and check if has class remove class 
 *  elements required element to listener blur
 *  nameClass required function for excute on blur 
 */


function blurElement_removeClass({ element, nameClass }) {

    try {

        if (!element.localName) throw "required  tag name for element"

        if (!(typeof nameClass === "string")) throw "required in type string "

        if (!nameClass.length) throw "required in name class is not empty"

        element.addEventListener("blur", () => {

            if (!hasClass({ element: element, nameClass: nameClass }))
                return;

            removeClass({ el: element, nameClass: nameClass });

        });

    } catch (error) {
        throw new Error(error)
    }

}




/**
 *  this method is add event blur in multiple element and add same function
 *  and check if has class add class 
 *  elements required element to listener blur
 *  nameClass required function for excute on blur 
 */


 function blurElement_addClass({ element, nameClass }) {

    try {

        if (!element.localName) throw "required  tag name for element"

        if (!(typeof nameClass === "string")) throw "required in type string "

        if (!nameClass.length) throw "required in name class is not empty"

        element.addEventListener("blur", () => {
            
            if (hasClass({ element: element, nameClass: nameClass }))
                return;

            addClass({ el: element, nameClass: nameClass });

        });

    } catch (error) {
        throw new Error(error)
    }

}

















export {
    blurElement,
    blurElementFunctions,
    blurElements,
    blurElementsFunctions,
    blurElement_removeClass,
    blurElement_addClass
}