function changeColor(id) {
    if (document.getElementById(id).style.borderColor == 'red') {
        document.getElementById(id).style.borderColor = 'yellow';
    } else if (document.getElementById(id).style.borderColor == 'yellow') {
        document.getElementById(id).style.borderColor = 'greenyellow';
    } else if (document.getElementById(id).style.borderColor == 'greenyellow') {
        document.getElementById(id).style.borderColor = 'aqua';
    } else if (document.getElementById(id).style.borderColor == 'aqua') {
        document.getElementById(id).style.borderColor = 'gray';
    } else {
        document.getElementById(id).style.borderColor = 'red';
    }
}
