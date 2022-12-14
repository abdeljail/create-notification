


/**
 * imports files from folder helpers 
 */
import { addClass } from "./helpers/Css/attClass/add.att.js";
import { hasClass, hasClasses } from "./helpers/Css/attClass/has.att.js";
import { removeClass } from "./helpers/Css/attClass/remove.att.js";
import { clickElement, clickElements } from "./helpers/Events/click.event.js";
import { focusElement } from "./helpers/Events/focus.event.js";
import { fetchDataString } from "./helpers/apis/get/fetch.string.js";
import { string } from "./helpers/inputs/inputs.text.js";
import { createElementTag } from "./helpers/classes/ceateElement.tag.js";
import { switchContentHeader, emptyContentHeader } from "./notification/functions/switchContentHeader.fun.js"
import { dragDropElement } from "./notification/functions/dragDrop.fun.js";


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

const searchBtn = headerShowContentTagName.querySelector("#search-btn");

const closeBtn = headerShowContentTagName.querySelector("#close-btn");

const createElement = responseContentData.firstElementChild.firstElementChild.firstElementChild;

const canvas = document.getElementById("canvas");

const contantMain = document.getElementById("contant-main");

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



}




const DOMelements = (array) => {

    return array.map((element) => {

        const createTag = new createElementTag('div');

        createTag.innerHTML(`<div class="${element} tages" id="${element}" tabindex="1" role="button" aria-label="${element}">${element}</div>`)

        createTag.createAttribute("draggable")

        createTag.setAttribute("draggable", "true")

        dragDropElement(createTag.element, canvas)

        return createTag.element;
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

    if (!resault.length)
        return console.log("resault is empty");

    responseContentData.lastElementChild.append(...DOMelements(resault));

}

async function serchContent(event) {

    if (inputSreach.value === "")
        return

    if (hasClass({ element: responseContentData, nameClass: "loading" }))
        return;

    responseContentData.lastElementChild.innerHTML = ""

    addClass({ el: responseContentData, nameClass: "loading" })

    const { data: { resault }, success } = await fetchDataString({ url: URL_APP + "get/serach" + "/" + inputSreach.name + "/" + inputSreach.value, el: responseContentData, nameClass: "loading" })

    if (!success)
        return alert("Error getting data from server you are trying to access");

    if (!resault.length) {
        return console.log("resault is empty");
    }

    responseContentData.lastElementChild.append(...DOMelements(resault));

}

function emptyInputSearch(event) {

    if (inputSreach.value === "")
        return;

    inputSreach.value = ""

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

responseContentData.lastElementChild.append(...DOMelements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]));

clickElement({ element: searchBtn, fun: serchContent });

clickElement({ element: closeBtn, fun: emptyInputSearch });

clickElement({ element: canvas, fun: switchContentHeader })

clickElement({ element: contantMain, fun: emptyContentHeader })

