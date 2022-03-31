var defaultColor = 'gray';
var color = defaultColor;


var textModeEnabled = false;


var backgroundDark = '#060606';
var backgroundLight = '#e4d8ce';

var themeDark = 'dark';
var themeLight = 'light';
var theme = themeDark;


function changeColor(element) {
    if (textModeEnabled) {
        var previous = element.textContent;

        var input = prompt('Button name', previous);
        if (!input) {
            return;
        }

        element.textContent = input;
        return;
    }

    if (element.style.borderColor == color) {
        element.style.borderColor = defaultColor;
    } else {
        element.style.borderColor = color;
    }
}


function setColor(newColor) {
    color = newColor;
    textModeOff();
}


function setAccentColor() {
    if (theme == themeDark) {
        color = 'white';
    } else {
        color = 'black';
    }
}


function resetColor() {
    color = defaultColor;
    textModeOff();
}


function textModeOn() {
    textModeEnabled = true;
}


function textModeOff() {
    textModeEnabled = false;
}


function switchTheme() {
    if (theme == themeDark) {
        theme = themeLight;

        document.body.style.backgroundColor = backgroundLight;
        changeColorAll('black');
    } else {
        theme = themeDark;

        document.body.style.backgroundColor = backgroundDark;
        changeColorAll('white');
    }
}


function changeColorAll(color) {
    var all = document.getElementsByTagName("*");
    for (var i = 0, max = all.length; i < max; i++) {
        all[i].style.color = color;
    }
}
