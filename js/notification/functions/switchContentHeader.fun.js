/**
 * imports the files helpers from folder helpers and folder functions 
 */

import { addClass } from "../../helpers/Css/attClass/add.att.js";
import { removeClass } from "../../helpers/Css/attClass/remove.att.js";
import { hasClass } from "../../helpers/Css/attClass/has.att.js";
import { clickElement } from "../../helpers/Events/click.event.js";
import { changeBackgroundElement } from "./changeBackground.fun.js";
import { changeBorderRadiusElement, keyupChangeRadiusBorder } from "./changeBorderRadius.fun.js";
import { changeBorderElement } from "./changeBorder.fun.js";

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

    appHeader.firstElementChild.innerHTML = /*html */
        `<div class="settings-background-colors background"> 
                <label for="primary_color" data-colors="background color">  
                    <input type="color" id="primary_color" name="primary-color">
                </label>
            </div>
            <div class="settings-border-radius border-radius">
                <div class="settings-border border">
                    <button type="button" class="btn-border" id="border" name="border">
                        <span><strong>Border</strong></span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 96H256V224H384V96zM384 288H256V416H384V288zM192 224V96H64V224H192zM64 416H192V288H64V416z" />
                            </svg>
                        </span>
                    </button>
                    <div id="show-border" class="show-border">
                        <div>
                            <div>
                                <div class="select">
                                    <div>
                                        <h4> Select color</h4>
                                        <label for="color-border" data-colors="background color">  
                                            <input type="color" id="color-border" name="color-border">
                                        </label>
                                    </div>
                                    <div>
                                        <h4> Select width</h4>
                                        <div class="select-width">
                                            <button type="button" id="decrease-borader" class="number-btn-border" name="decrease-border" data-name="decrease border">
                                                <span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M2 6a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6Z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <input type="number" id="number" class="number-border" name="number-border" min="0" max="200" value="0" />
                                            <button type="button" id="increase" class="number-btn-border" name="increase-border" data-name="increase border ">
                                                <span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M5.25 9.25a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5Z"
                                                            fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div class="settings-border-radius border-radius">
                <div class="border-radius">
                    <button type="button" id="decrease" class="number  number-btn" name="decrease" data-name="decrease border radius">
                        <span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6Z" fill="currentColor"></path></svg>
                        </span>
                    </button>
                    <input type="number" id="number" class="number" name="number" min="0" max="200" value="0"/>
                    <button type="button" id="increase" class="number number-btn" name="increase"  data-name="increase borader radius" >
                        <span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 9.25a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5Z" fill="currentColor"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
        `;

    changeBorderElement(document.getElementById("border"), document.getElementById("show-border"));

    clickElement({ element: document.getElementById("primary_color"), fun: classAdd });

    changeBackgroundElement(document.getElementById("primary_color"), elementCanvas);

    changeBorderRadiusElement([...appHeader.querySelectorAll(".number-btn")], elementCanvas);

    document.getElementById("number").addEventListener("input", function () { keyupChangeRadiusBorder(this, elementCanvas) })

}

export {
    switchContentHeader,
    emptyContentHeader,
}