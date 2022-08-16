/**
 * imports the files helpers from folder helpers and folder functions 
 */

import { addClass } from "../../helpers/Css/attClass/add.att.js";
import { removeClass } from "../../helpers/Css/attClass/remove.att.js";
import { hasClass } from "../../helpers/Css/attClass/has.att.js";
import { changeBackgroundElement } from "./changeBackground.fun.js";
import { clickElement } from "../../helpers/Events/click.event.js";

/**
 * switch content html in tag header 
 * for click focus element tag html in canvas element
 */

const appHeader = document.getElementById("app-header");

let elementCanvas;
let haederElement;

function switchContentHeader(event) {

    elementCanvas = this;

    try {
        addClass({ el: this, nameClass: "focus" })
        switch (this.getAttribute('name')) {
            case "canvas":
                settingsCanva_1();
                break
            default: return false
        }
    } catch (error) {
        throw error;
    }

}

function emptyContentHeader(event) {


    if (event.target !== this)
        return;

    if (hasClass({ element: appHeader, nameClass: "event" }))
        return removeClass({ el: appHeader, nameClass: "event" });

    if (elementCanvas !== undefined)
        removeClass({ el: elementCanvas, nameClass: "focus" })

    console.log('empty content header received');

    appHeader.firstElementChild.innerHTML = "test test terst";

}

const classAdd = () => addClass({ el: appHeader, nameClass: "event" })

function settingsCanva_1() {

    appHeader.firstElementChild.innerHTML = `<div class="settings-colors background"> <label for="primary_color" data-colors="color background "> <input type="color" id="primary_color" class="field-radio" name="primary-color"></label></div>`;
    clickElement({ element: document.getElementById("primary_color"), fun: classAdd });
    changeBackgroundElement(document.getElementById("primary_color"), elementCanvas)

}

export {
    switchContentHeader,
    emptyContentHeader,
}