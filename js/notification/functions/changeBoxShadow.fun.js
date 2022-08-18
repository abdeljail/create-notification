







let canvas;

let shadow = [0, 0, 0, 0, "rgba(0, 0, 0, 0.75)"]

/**
 * change Horizontal box Shadow for change value input range
 *  */
const horizontalShadow = (element, canvasElement) => {

    canvas = canvasElement;

    element.addEventListener('input', () => {
        element.nextElementSibling.value = element.value;
        shadow[0] = element.value + "px";
        canvasElement.style.boxShadow = "  " + shadow[0] + " " + shadow[1] + " " + shadow[2] + " " + shadow[3] + " " + shadow[4] + " "
    })

}




export {
    horizontalShadow,
}