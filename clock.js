let clock = null;

    

const digitalClock = ()=>{
    var today = newDate();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    console.log(year + '年' + month + '月' + day + '日');
    const now = new Date();

    const [hour, minute, second] = [now.getHours(), now.getMinutes(), now.getSeconds()];

    const [txtHour, txtMinute, txtSecond] = [
        String(hour).padStart(2, "0"),
        String(minute).padStart(2, "0"),
        String(second).padStart(2, "0"),
    ];

    const txtDigitalClock = `${txtHour}:${txtMinute}:${txtSecond}`;
    clock.textContent = txtDigitalClock;
    requestAnimationFrame(digitalClock);
};

window.addEventListener("load", ()=>{
    clock = document.getElementById("clock");
    digitalClock();
});
