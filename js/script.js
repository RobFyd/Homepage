{
    const button2 = document.querySelector(".js-button2");
    const jsHeader = document.querySelectorAll(".js-header");
    const jsLink = document.querySelectorAll(".js-link");
    const cellHeader = document.querySelectorAll(".js-cellHeader")
    window.addEventListener('scroll', checkVisibility);

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

    const onChangeBackgroundClick = () => {

        jsHeader.forEach((jsHeaders) => {
            jsHeaders.classList.toggle("cold1")
        });

        jsLink.forEach((jslinks) => {
            jslinks.classList.toggle("cold2")
        });

        cellHeader.forEach((cellHeaders) => {
            cellHeaders.classList.toggle("cold1")
        });

        button2.classList.toggle("cold3");
    };

    const headerZoomElements = document.querySelectorAll('.js-headerZoom');

    function checkVisibility() {
        headerZoomElements.forEach(headerZoom => {
            const elementPosition = headerZoom.getBoundingClientRect().top;
            const screenHeight = window.innerHeight / 4;

            if (elementPosition < screenHeight) {
                headerZoom.classList.remove('zoomInvisible');
                headerZoom.classList.add('zoomVisible');
            } else {
                headerZoom.classList.remove('zoomVisible');
                headerZoom.classList.add('zoomInvisible');
            }
        });
    };

    const bottomHeaderZoomElements = document.querySelector('.js-bottomHeaderZoom');

    function checkVisibilityBottom() {
        const elementPosition = bottomHeaderZoomElements.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight / 1;
    
        if (elementPosition > screenHeight) {
            bottomHeaderZoomElements.classList.add('zoomInvisible');
            bottomHeaderZoomElements.classList.remove('zoomVisible');
        } else {
            bottomHeaderZoomElements.classList.add('zoomVisible');
            bottomHeaderZoomElements.classList.remove('zoomInvisible');
        }
    };

    window.addEventListener('scroll', () => {
        checkVisibilityBottom();
    });

    const init = () => {
        const click1 = document.querySelector(".js-button");
        click1.addEventListener("click", removeNameClick);
        welcome();
        button2.addEventListener("click", toggleBackground);
        button2.addEventListener("click", onChangeBackgroundClick);
    };

    init();
};