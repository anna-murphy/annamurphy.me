/**
 * List of possible characters to replace with.
 */
var POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:;,.?/\|`~!@#$%^&*_-+=";

/**
 * Generates garbo text
 */
function makeGarbage(length) {
    let text = "";
    for (let i = 0; i < length; i++){
        text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));
    }
    return text;
}

/**
 * Creates a collection of text that can be garbaged
 */
var garbageables = document.getElementsByClassName("garbageable");

/**
 * Adds event handlers to all the garbageables
 */
for (let i = 0; i < garbageables.length; i++) {
    let temp = i;
    garbageables[i].addEventListener("mouseover", () => {
        let words = garbageables[temp].innerHTML.trim().split(" ");
        let newText = "";
        for (let j = 0; j < words.length; j++) {
            let word = words[j];
            if (Math.random() < 0.3){
                newText += makeGarbage(word.length) + " ";
            } else {
                newText += word + " ";                            
            }
        }
        garbageables[temp].innerHTML = newText;
    });
}
