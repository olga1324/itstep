let button = document.querySelector("button");

button.addEventListener("click", function(){
    let time1 = document.querySelector("#time1").value.split(":");
    let time2 = document.querySelector("#time2").value.split(":");

    let minutes1 = +time1[0]*60 +(+time1[1]);
    let minutes2 = +time2[0]*60 +(+time2[1]);

    let diff = minutes2 - minutes1;

    let minutesResult = diff % 60;
    let hoursResult = (diff - minutesResult) / 60;
    if(minutesResult < 10){
        minutesResult = "0" + minutesResult;
    }
     if(hoursResult < 10){
        hoursResult = "0" + hoursResult;
    }
    document.querySelector(".result").innerHTML = `${hoursResult}:${minutesResult}`;
});