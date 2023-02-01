console.log("Hello World :)");

let click1 = document.querySelector(".js-button");
let header = document.querySelector(".js-header");
let myName = document.querySelector(".js-name");

click1.addEventListener("click", () => {
    header.remove();
    myName.remove();
});

let button2 = document.querySelector(".js-button2");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

button2.addEventListener("click", () => {
    body.classList.toggle("cold");

    themeName.innerText = body.classList.contains("cold") ? "warm" : "cool";
});

let header__title = document.querySelector(".header__title");
let js__header = document.querySelector(".js__header");
let js__header2 = document.querySelector(".js__header2");
let js__header3 = document.querySelector(".js__header3");
let js__header4 = document.querySelector(".js__header4");

button2.addEventListener("click", () => {
    header__title.classList.toggle("cold1");
    js__header.classList.toggle("cold1");
    js__header2.classList.toggle("cold1");
    js__header3.classList.toggle("cold1");
    js__header4.classList.toggle("cold1");
});

let js__link = document.querySelector(".js__link");
let js__link2 = document.querySelector(".js__link2");
let js__link3 = document.querySelector(".js__link3");
let js__link4 = document.querySelector(".js__link4");


button2.addEventListener("click", () => {
    js__link.classList.toggle("cold2");
    js__link2.classList.toggle("cold2");
    js__link3.classList.toggle("cold2");
    js__link4.classList.toggle("cold2");
});

button2.addEventListener("click", () => {
    button2.classList.toggle("cold3");
});

let table__cellHeader = document.querySelector(".table__cellHeader")
let t2 = document.querySelector(".t2")
let t3 = document.querySelector(".t3")
let t4 = document.querySelector(".t4")
let t5 = document.querySelector(".t5")
let t6 = document.querySelector(".t6")
let t7 = document.querySelector(".t7")
let t8 = document.querySelector(".t8")
let t9 = document.querySelector(".t9")
let t10 = document.querySelector(".t10")
let t11 = document.querySelector(".t11")
let t12 = document.querySelector(".t12")

button2.addEventListener("click", () => {
    table__cellHeader.classList.toggle("cold1");
    t2.classList.toggle("cold1");
    t3.classList.toggle("cold1");
    t4.classList.toggle("cold1");
    t5.classList.toggle("cold1");
    t6.classList.toggle("cold1");
    t7.classList.toggle("cold1");
    t8.classList.toggle("cold1");
    t9.classList.toggle("cold1");
    t10.classList.toggle("cold1");
    t11.classList.toggle("cold1");
    t12.classList.toggle("cold1");
});






