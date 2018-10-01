document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");

    function showHexColor() {
        const d = new Date();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        
        if (hour.toString().length < 2) {
            hour = "0" + hour;
        }
        if (min.toString().length < 2) {
            min = "0" + min;
        }
        if (sec.toString().length < 2) {
            sec = "0" + sec;
        }
        const time = hour + ":" + min + ":" + sec;
        const hexColor = "#" + hour + min + sec;
        body.style.backgroundColor = hexColor;
        return time;
    }

    function showTime() {
        h1.textContent = showHexColor();
    }
    setInterval(showTime, 1000);
});