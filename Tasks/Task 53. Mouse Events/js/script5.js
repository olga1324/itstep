document.querySelector(".child").onmousemove = function(event){
    let x = Math.round(event.clientX-event.target.getBoundingClientRect().left);
    // высчитываем координаты относительно окна 
    let y = Math.round(event.clientY-event.target.getBoundingClientRect().top);

    event.target.innerHTML = `X: ${x}<br>Y: ${y}`;
}