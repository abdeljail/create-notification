/**
 * imports the files helpers from folder helpers and folder functions 
 */
import { clickElement } from "../../helpers/Events/click.event.js";
import { hasClass } from "../../helpers/Css/attClass/has.att.js";
import { addClass } from "../../helpers/Css/attClass/add.att.js";
import { removeClass } from "../../helpers/Css/attClass/remove.att.js";


let showElement;

/**
 * change border radius element for click the buttons increase and decrease
 */

const changeBorderElement = (element, show) => {
    showElement = show;
    clickElement({ element: element, fun: changeBorder })
}

/**
 * 
 */
function changeBorder() {
    if (hasClass({ element: showElement, nameClass: "active" }))
        return;
    addClass({ el: showElement, nameClass: "active" });
    console.log("yes");
}

export {
    changeBorderElement,
}

// const changeBackgroundElement = (element, elementCanvas) => element.addEventListener("input", () => {
//     elementCanvas.style.backgroundColor = element.value
//     element.parentElement.style.backgroundColor = element.value
// })