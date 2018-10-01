const body = document.querySelector("body");
const h1 = document.querySelector("h1");

function whatTime() {
    const d = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const time = hour + ":" + min + ":" + sec;
    console.log(time);
    return time;
}

function showTime() {
    h1.textContent = whatTime();
}
setInterval(showTime, 1000);