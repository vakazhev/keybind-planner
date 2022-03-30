var defaultColor = 'gray';
var color = defaultColor;

var textModeEnabled = false;


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
    textModeEnabled = false;
    textModeOff();
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
