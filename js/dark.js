/**
 * File: dark.js
 * Author: Anna Murphy
 * Description:
 * 		File to save user dark theme
 * 		preferences via cookies.
 */

/**
 * Name: setCookie
 * Description:
 * 		Sets a cookie to auto
 * 		load dark theme on page 
 * 		startup.
 */
function setCookie(){}

/**
 * Name: checkCookie
 * Description:
 * 		Function to on page
 * 		load, check for a dark theme
 * 		setting in the cookie.
 */
function checkCookie(){}


/**
 * On load, add the toggle theme
 * button and check the cookie and 
 * update the page styles.
 */
document.onload = function()
{
	document.getElementsByClassName("darkSwitch")[0].addEventLister("onclick", () => {setCookie();});
	checkCookie();
};
