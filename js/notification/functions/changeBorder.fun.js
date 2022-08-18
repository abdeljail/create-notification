/**
 * imports the files helpers from folder helpers and folder functions 
 */
import { clickElements } from "../../helpers/Events/click.event.js";
import { focusElement } from "../../helpers/Events/focus.event.js";
import { blurElement } from "../../helpers/Events/blur.event.js";
import { hasClass } from "../../helpers/Css/attClass/has.att.js";
import { addClass } from "../../helpers/Css/attClass/add.att.js";
import { removeClass } from "../../helpers/Css/attClass/remove.att.js";


let showElement;

/**
 * change border radius element for click the buttons increase and decrease
 */

const borderElement = (element, show) => {
    showElement = show;
    focusElement({ element: element, fun: showElementBorder })
}

let canvas;
let value;
// let check;

/**
 * change border radius element for click the buttons increase and decrease
 */
const changeBorderElement = (elements, canvasElement) => {

    canvas = canvasElement;

    clickElements({ elements: elements, fun: changeBorderRadius })

}



/**
 * change border radius of the element when keyup input 
 */
function keyupChangeBorder(input, canvasElement) {

    if (input.value >= parseInt(input.max))
        input.value = parseInt(input.max);

    if (input.value <= parseInt(input.min))
        input.value = parseInt(input.min);

    canvasElement.style.borderWidth = input.value + "px";
}




export {
    borderElement,
    changeBorderElement,
    keyupChangeBorder
}



















// const changeBackgroundElement = (element, elementCanvas) => element.addEventListener("input", () => {
//     elementCanvas.style.backgroundColor = element.value
//     element.parentElement.style.backgroundColor = element.value
// })




/**
 * show div setting border for click button 
 */
 function showElementBorder() {
    if (hasClass({ element: showElement, nameClass: "active" }))
        return;
    addClass({ el: showElement, nameClass: "active" });
}

/**
 * check value for input for change value 
 * and update target element border width
 */
function changeBorderRadius() {


    console.log(this);

    value = parseInt(this.parentElement.children[1].value);

    if (value >= this.parentElement.children[1].max && this.id === "increase-border")
        return;

    if (value <= this.parentElement.children[1].min && this.id === "decrease-border")
        return;

    if (this.id === "decrease-border")
        value -= 1;

    else
        value += 1;

    this.parentElement.children[1].value = value;
    canvas.style.borderWidth = value + "px";

}