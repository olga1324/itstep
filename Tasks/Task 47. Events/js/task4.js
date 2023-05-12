/*4. Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в 
полях ввода местами.*/
document.getElementById("btn").onclick = function(){
    let area1 = document.getElementById("x").value;
    let area2 = document.getElementById("y").value;

    document.getElementById("x").value = area2;
    document.getElementById("y").value = area1;
}
