var defaultColor = 'gray';
var color = defaultColor;

var textModeEnabled = false;

// var backgroundDark = '#060606';
// var backgroundLight = '#e4d8ce';

// var themeDark = 'dark';
// var themeLight = 'light';
// var theme = themeDark;


function changeColor(element) {
    if (textModeEnabled) {
        element.textContent = prompt('Button name', element.textContent);
        return;
    }

    element.style.borderColor = element.style.borderColor == color ? defaultColor : color;
}


function setColor(newColor) {
    color = newColor;
    disableTextMode();
}


function setAccentColor() {
    // color = theme == themeDark ? 'white' : 'black';
    color = 'white';
    disableTextMode();
}


function resetColor() {
    color = defaultColor;
    disableTextMode();
}


function enableTextMode() {
    textModeEnabled = true;
}


function disableTextMode() {
    textModeEnabled = false;
}


// function switchTheme() {
//     if (theme == themeDark) {
//         theme = themeLight;

//         document.body.style.backgroundColor = backgroundLight;
//         changeColorAll('black');
//     } else {
//         theme = themeDark;

//         document.body.style.backgroundColor = backgroundDark;
//         changeColorAll('white');
//     }
// }


// function changeColorAll(color) {
//     var all = document.getElementsByTagName("*");
//     for (var i = 0, max = all.length; i < max; i++) {
//         all[i].style.color = color;
//     }
// }
