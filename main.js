let width = 16;
let height = 12;
let widthyes = 16
let heightyes = 12;
let counter = 0;
let result = document.getElementById('result');
function no() {
    let no = document.getElementById('no');
    let yes = document.getElementById('yes');
    width -= 1.5;
    height -= 1;
    widthyes += 1.5;
    heightyes += 1;
    no.style.width = width + 'vw';
    no.style.height = height + 'vh';
    yes.style.width = widthyes + 'vw';
    yes.style.height = heightyes + 'vh';
    counter++;
    if(counter == 1) {
        result.textContent = "Ej no :(((";
    }
    if(counter == 2) {
        result.textContent = "Wtf serio?!?!";
    }
    if(counter == 3) {
        result.textContent = "No weźźź";
    }
    if(counter == 4) {
        result.textContent = "Plsssss";
    }
    if(counter == 5) {
        result.textContent = "No kliknij takkkkk";
    }
    if(counter == 6) {
        result.textContent = "WEŹŹŹŹŹ";
    }
    if(counter == 7) {
        no.style.display = 'none';
        result.textContent = "Od nowa.";
        setTimeout(() => {
            location.reload();
        }, 400);
    }
}

function yes() {
    let no = document.getElementById('no');
    result.textContent = 'JEJEJEJEJ KOCHAM CIE <333'
    no.style.display = 'none';
}
