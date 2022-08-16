/**
 * change background element 
 */

const changeBackgroundElement = (element, elementCanvas) => element.addEventListener("input", () => {
    elementCanvas.style.backgroundColor = element.value
    element.parentElement.style.backgroundColor = element.value
})

export {
    changeBackgroundElement,
}