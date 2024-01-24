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
    function getAudioPath(nameAudio, pathToAudio = '../assets/sounds/') {
        return pathToAudio+nameAudio;
    }
    const keyBtn = [
        {key: "w", audio: getAudioPath('nota-do.mp3'),},
        {key: "e", audio: getAudioPath('music-drum-loop-1.mp3'),},
        {key: "r", audio: getAudioPath('cymbal_accent_01.mp3'),},
        {key: "s", audio: getAudioPath('c0186eb6cc5bbab.mp3'),},
        {key: "d", audio: getAudioPath('8193607b76ed518.mp3'),},
        {key: "f", audio: getAudioPath('3827f679ad62c4b.mp3'),},
        {key: "x", audio: getAudioPath('9d0152420edde72.mp3'),},
        {key: "c", audio: getAudioPath('7eefab59f1d924b.mp3'),},
        {key: "v", audio: getAudioPath('0e66bac11868f97.mp3'),},
    ];
    const keyBtnEl = {};
    keyBtn.forEach((item, index) => {
        const audio = new Audio(item.audio)
        const btnEl = createEl("button");
        btnEl.innerHTML = item.key;
        btnEl.classList.add("simple_btn");
        keyBtnEl[keyName + item.key.toUpperCase()] = {
            btnEl,
            audio
        };
        simpleWrapEl.appendChild(btnEl);
    })
    document.addEventListener("keydown", function(e) {
        const pressedBtn = keyBtnEl[e.code];
        if (pressedBtn) {
            pressedBtn.audio.play();
            pressedBtn.btnEl.classList.add("active");
        }
    });
    document.addEventListener("keyup", function(e) {
        const pressedBtn = keyBtnEl[e.code];
        if (pressedBtn) {
            pressedBtn.audio.pause();
            pressedBtn.audio.currentTime = 0;
            pressedBtn.btnEl.classList.remove("active");
        }
    });
}