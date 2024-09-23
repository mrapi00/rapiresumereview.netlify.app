import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

let cont = document.getElementById("contactN")
cont.addEventListener("click", function(){
    document.getElementById("phone_number").innerHTML = "(347) 679-5659";
})
