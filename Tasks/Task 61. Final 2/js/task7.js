/*7. Дано 2 массива. Проверить, можно ли один массив путем перестановки элементов
 получить из второго массива.*/
let a = [2, 5, 6,11, 12, 15 ,8];
let b = [2, 5, 6, 11, 12, 15, 8];
//let b = [5, 15, 7, 12, 54, 23];

function compare(a, b){
    
a.toString().toLowerCase().split().sort().join("");
b.toString().toLowerCase().split().sort().join("");

for(let i = 0; i < a.length; i++){
    if(a[i] === b[i]){
      return true;  
    }   
}
 return false;
} 

console.log(compare(a,b))