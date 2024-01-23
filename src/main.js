document.addEventListener("DOMContentLoaded", documentOnReady);

function documentOnReady () {
    changeTheme();
    createBtn();
}
/* ---------------------------------------- */
function getEl(id) {
    const symbol = id[0];
    if (symbol === "#") {
        return document.getElementById(id.slice(1));
    } else if (symbol === ".") {
        return document.getElementsByClassName(id.slice(1));
    } else {
        return document.getElementsByTagName(id);
    }
}

function createEl(tag) {
    return document.createElement(tag);
}
/* ---------------------------------------- */


function changeTheme () {
    const black = '#151515';
    const white = '#aaaaaa';

    const checkThemeEl = document.getElementById("checkTheme");
    checkThemeEl.addEventListener("change", function() {
        const style = document.documentElement.style;
        console.log(checkThemeEl.checked);
        if(checkThemeEl.checked) {
            style.setProperty("--primary", white);
            style.setProperty("--contrast", black);
        }
        else {
            style.setProperty("--primary", black);
            style.setProperty("--contrast", white);
        }
    });
}

function createBtn () {
    const simpleWrapEl = getEl('#simple_ref');
    const keyName = "Key";
    const keyBtn = ['w', 'e', 'r', 's', 'd', 'f', 'x', 'c', 'v'];
    const keyBtnEl = {};
    for(let i=0; i<keyBtn.length; i++) {
        const btnEl = createEl("button");
        btnEl.innerHTML = keyBtn[i];
        btnEl.classList.add("simple_btn");
        keyBtnEl[keyName + keyBtn [i].toUpperCase()] = btnEl;
        simpleWrapEl.appendChild(btnEl);
    }
    document.addEventListener("keydown", function(e) {
        const pressedBtn = keyBtnEl[e.code];
        if (pressedBtn) {
            pressedBtn.classList.add("active");
        }
    });
    document.addEventListener("keyup", function(e) {
        const pressedBtn = keyBtnEl[e.code];
        if (pressedBtn) {
            pressedBtn.classList.remove("active");
        }
    });
}