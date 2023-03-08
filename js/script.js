{
    const welcome = () => {
        console.log("Hello World :)");
    };

    const removeNameClick = () => {
        const header = document.querySelector(".js-header-remove");
        const myName = document.querySelector(".js-name");
        header.remove();
        myName.remove();
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("cold");
        themeName.innerText = body.classList.contains("cold") ? "warm" : "cool";
        
    };

    const init = () => {
        const click1 = document.querySelector(".js-button");
        click1.addEventListener("click", removeNameClick);
        welcome();
        button2.addEventListener("click", toggleBackground);
        button2.addEventListener("click", onChangeBackgroundClick);
    };

    const button2 = document.querySelector(".js-button2");

    const onChangeBackgroundClick = () => {
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
        headerTitle.classList.toggle("cold1");
        jsHeader.classList.toggle("cold1");
        jsHeader2.classList.toggle("cold1");
        jsHeader3.classList.toggle("cold1");
        jsHeader4.classList.toggle("cold1");
        jsHeader5.classList.toggle("cold1");
        jsLink.classList.toggle("cold2");
        jsLink2.classList.toggle("cold2");
        jsLink3.classList.toggle("cold2");
        jsLink4.classList.toggle("cold2");
        jsLink5.classList.toggle("cold2");
        button2.classList.toggle("cold3");

        
    };

    init();


    const headerTitle = document.querySelector(".js-header-title");
    const jsHeader = document.querySelector(".js-header");
    const jsHeader2 = document.querySelector(".js-header2");
    const jsHeader3 = document.querySelector(".js-header3");
    const jsHeader4 = document.querySelector(".js-header4");
    const jsHeader5 = document.querySelector(".js-header5");

    const jsLink = document.querySelector(".js-link");
    const jsLink2 = document.querySelector(".js-link2");
    const jsLink3 = document.querySelector(".js-link3");
    const jsLink4 = document.querySelector(".js-link4");
    const jsLink5 = document.querySelector(".js-link5");

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
}






