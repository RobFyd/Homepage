console.log("Hello World :)");

const click1 = document.querySelector(".js-button");
const header = document.querySelector(".js-header");
const myName = document.querySelector(".js-name");

click1.addEventListener("click", () => {
    header.remove();
    myName.remove();
});

const button2 = document.querySelector(".js-button2");
const body = document.querySelector(".js-body");
const themeName = document.querySelector(".js-themeName");

button2.addEventListener("click", () => {
    body.classList.toggle("cold");

    themeName.innerText = body.classList.contains("cold") ? "warm" : "cool";
});

const header__title = document.querySelector(".header__title");
const js__header = document.querySelector(".js__header");
const js__header2 = document.querySelector(".js__header2");
const js__header3 = document.querySelector(".js__header3");
const js__header4 = document.querySelector(".js__header4");

button2.addEventListener("click", () => {
    header__title.classList.toggle("cold1");
    js__header.classList.toggle("cold1");
    js__header2.classList.toggle("cold1");
    js__header3.classList.toggle("cold1");
    js__header4.classList.toggle("cold1");
});

const js__link = document.querySelector(".js__link");
const js__link2 = document.querySelector(".js__link2");
const js__link3 = document.querySelector(".js__link3");
const js__link4 = document.querySelector(".js__link4");


button2.addEventListener("click", () => {
    js__link.classList.toggle("cold2");
    js__link2.classList.toggle("cold2");
    js__link3.classList.toggle("cold2");
    js__link4.classList.toggle("cold2");
});

button2.addEventListener("click", () => {
    button2.classList.toggle("cold3");
});

const table__cellHeader = document.querySelector(".table__cellHeader")
const t2 = document.querySelector(".t2")
const t3 = document.querySelector(".t3")
const t4 = document.querySelector(".t4")
const t5 = document.querySelector(".t5")
const t6 = document.querySelector(".t6")
const t7 = document.querySelector(".t7")
const t8 = document.querySelector(".t8")
const t9 = document.querySelector(".t9")
const t10 = document.querySelector(".t10")
const t11 = document.querySelector(".t11")
const t12 = document.querySelector(".t12")

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






