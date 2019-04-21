/**
 * List of possible characters to replace with.
 */
var POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:;,.?/\|`~!@#$%^&*_-+=";

/**
 * Creates a collection of elements that are translated to garbageables.
 */
var toGarbage = document.getElementsByClassName("toGarbage");

/**
 * Wraps all text in toGarbage classes into garbageable spans
 */
for (let i = 0; i < toGarbage.length; i++) {
    let temp = i;
    let newContent = "";
    let oldContent = toGarbage[i].innerHTML;
    toGarbage[i].innerHTML = "";
    for (let j = 0; j < oldContent.length; j++ ) {
        let c = oldContent[j];
        if (c == " ") {
            newContent = document.createTextNode(" ");
        } else {
            let span = document.createElement("span");
            span.className += " garbageable";
            span.appendChild(document.createTextNode(c));
            span.style.color = '#' + Math.floor(Math.random() * 16777216).toString(16);
            newContent = span;            
        }
        toGarbage[i].appendChild(newContent);
    }
    toGarbage[i].innerHTML = newContent;
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
        garbageables[temp].style.color = '#' + Math.floor(Math.random() * 16777216).toString(16);
        garbageables[temp].innerHTML = 
            POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));;
    });
}

