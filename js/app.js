


/**
 * imports files from folder helpers 
 */
import { addClass } from "./helpers/Css/attClass/add.att.js";
import { hasClass } from "./helpers/Css/attClass/has.att.js";
import { removeClass } from "./helpers/Css/attClass/remove.att.js";
import { clickElement, clickElements } from "./helpers/Events/click.e.js";
import { fetchDataString } from "./helpers/apis/get/fetch.string.js";
import { string } from "./helpers/inputs/inputs.text.js";

/**
 * create varaibles globals
 */
const URL_APP = "http://127.0.0.1:8000/canvas/apis/"

const app = document.getElementById("app");

const btnsAside = [...document.getElementsByClassName("btn-aside")];

const showContentTagName = document.getElementById("show-content-tag-name");

const responseContentData = document.getElementById("response-data");

const hideContentTagName = document.getElementById("hide-content-tag-name");

const headerShowContentTagName = document.getElementById("haeder-content-show-tag-name");

const contentHeader = headerShowContentTagName.querySelector("h3");

const inputSreach = headerShowContentTagName.querySelector("input");

const createElement = responseContentData.firstElementChild.firstElementChild.firstElementChild;

let templete = [];
// let templete = [];



/**
 * create functions 
 */


/**
 * change content text header in div [ show Content Tag Name ] in aside 
 * element for click 
 */

const changeContentTagName = (btn) => {

    contentHeader.textContent = btn.dataset.nameTag;
    inputSreach.name = btn.name;
    createElement.innerHTML = `create now ${btn.name}`;
    createElement.dataset.name = btn.name;

};

function createElementDOM(event) {
    console.log(event);
}

const DOMelements = (array) => {

    return array.map((element) => {

        let div = document.createElement('div');

        div.innerHTML = `<div class="${element} tages" id="${element}" tabindex="1" role="button" aria-label="${element}">${element}</div>`

        clickElement({ element: div, fun: createElementDOM })

        return div
    })

}


async function addClassBtn(event) {

    if (hasClass({ element: this, nameClass: "active" }))
        return;

    if (!hasClass({ element: showContentTagName, nameClass: "active" }))
        addClass({ el: showContentTagName, nameClass: "active" })

    let classBtn = document.querySelector(".btn-aside.active");

    if (classBtn)
        removeClass({ el: classBtn, nameClass: "active" })

    addClass({ el: this, nameClass: "active" })

    changeContentTagName(this)
    responseContentData.lastElementChild.innerHTML = ""
    const { data: { resault }, success } = await fetchDataString({ url: URL_APP + "get/" + inputSreach.name, element: inputSreach, el: responseContentData, nameClass: "loading" })

    if (!success)
        return alert("Error getting data from server you are trying to access");

    if (!resault.length) {
        return console.log("resault is empty");
    }

    
    responseContentData.lastElementChild.append(...DOMelements(resault));


}

const hideContentAside = (event) => {

    removeClass({ el: document.querySelector(".btn-aside.active"), nameClass: "active" })
    removeClass({ el: showContentTagName, nameClass: "active" })

}


// if (!string(inputSreach.value))
//         return alert("Invalid value input for type string");





/**
 * add event click for elements 
 */

clickElements({ elements: btnsAside, fun: addClassBtn });

clickElement({ element: hideContentTagName, fun: hideContentAside })

clickElement({ element: createElement, fun: createElementDOM })
