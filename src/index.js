import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

let cont = document.getElementById("contactN")
cont.addEventListener("click", function(){
    document.getElementById("phone_number").innerHTML = "(347) 679-5659";
})

// Remove the initial 'sr' class on the <html> element so elements with
// the .load-hidden class become visible and ScrollReveal can animate them.
// The class was originally added to avoid FOUC but wasn't being removed.
try {
    if (document && document.documentElement && document.documentElement.classList.contains('sr')) {
        document.documentElement.classList.remove('sr');
    }
} catch (e) {
    // no-op in non-browser environments
}
