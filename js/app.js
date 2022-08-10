


/**
 * imports files from folder helpers 
 */
import { addClass } from "./helpers/Css/attClass/add.att.js";
import { hasClass } from "./helpers/Css/attClass/has.att.js";
import { removeClass } from "./helpers/Css/attClass/remove.att.js";
import { clickElement, clickElements } from "./helpers/Events/click.e.js";
import { fetchDataString_1 } from "./helpers/apis/get/fetch.string.js";


/**
 * create varaibles globals
 */
const URL_APP = "http://127.0.0.1:8000/cavas/apis/"
const app = document.getElementById("app");

const btnsAside = [...document.getElementsByClassName("btn-aside")];

const showContentTagName = document.getElementById("show-content-tag-name");

const responseContentData = document.getElementById("response-data");

const hideContentTagName = document.getElementById("hide-content-tag-name");

const headerShowContentTagName = document.getElementById("haeder-content-show-tag-name");

const contentHeader = headerShowContentTagName.querySelector("h3");

const inputSreach = headerShowContentTagName.querySelector("input");



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

};



function addClassBtn(event) {

    if (hasClass({ element: this, nameClass: "active" }))
        return;

    if (!hasClass({ element: showContentTagName, nameClass: "active" }))
        addClass({ el: showContentTagName, nameClass: "active" })

    let classBtn = document.querySelector(".btn-aside.active");
    if (classBtn)
        removeClass({ el: classBtn, nameClass: "active" })

    addClass({ el: this, nameClass: "active" })

    changeContentTagName(this)

    fetchDataString_1({ url: URL_APP , element: inputSreach, amination: responseContentData })

}

const hideContentAside = (event) => {

    removeClass({ el: document.querySelector(".btn-aside.active"), nameClass: "active" })
    removeClass({ el: showContentTagName, nameClass: "active" })

}









/**
 * add event click for elements 
 */

clickElements({ elements: btnsAside, fun: addClassBtn });

clickElement({ element: hideContentTagName, fun: hideContentAside })
