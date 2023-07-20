let nav=document.querySelector("nav");
const accents=["#343CFF", "#4AFF93", "#FF4A4A", "#FF9635"];

const background_accent_items=[
    document.querySelector("#logo")
]

let accent_1=accents[Math.floor(Math.random()*4)];

let settings_shown=false;
document.querySelector(".settings-menu").style.opacity="0";
document.querySelector("#settings").addEventListener("click", () => {
    if (settings_shown) {
        document.querySelector(".settings-menu").style.opacity="0";
        settings_shown=false;
    } else if (!settings_shown) {
        document.querySelector(".settings-menu").style.opacity="1";
        settings_shown=true;
    }
});

document.querySelector("#logo").style.backgroundColor=`${accent_1}`;

document.querySelector("#light-mode").addEventListener("click", () => {
    let response=confirm("Are you sure that you want to activate light mode?");
    if (response) {
        document.querySelector("#coder-colors").style.setProperty("color", "black");document.querySelector("nav").style.backgroundColor="#EEEEEE";
        document.body.style.backgroundColor="white";
        document.querySelectorAll(".nav-button").forEach((button) => {
            button.style.color="#565656";
        });
    }
});
document.querySelector("#dark-mode").addEventListener("click", () => {
    document.querySelector("#coder-colors").style.setProperty("color", "white");document.querySelector("nav").style.setProperty("background-color", "#222222");
    document.body.style.backgroundColor="#181818";
    document.querySelectorAll(".nav-button").forEach((button) => {
        button.style.color="rgb(207, 207, 207)";
    });
});

document.querySelector("#accent-red").addEventListener("click", () => {
    background_accent_items.forEach((item) => {
        item.style.backgroundColor="#FF4A4A";
    });
});
document.querySelector("#accent-orange").addEventListener("click", () => {
    background_accent_items.forEach((item) => {
        item.style.backgroundColor="#FF9635";
    });
});
document.querySelector("#accent-green").addEventListener("click", () => {
    background_accent_items.forEach((item) => {
        item.style.backgroundColor="#4AFF93";
    });
});
document.querySelector("#accent-blue").addEventListener("click", () => {
    background_accent_items.forEach((item) => {
        item.style.backgroundColor="#343CFF";
    });
});
