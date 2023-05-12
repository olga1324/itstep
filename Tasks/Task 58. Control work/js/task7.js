/*7. Данно 2 массива с целыми числами. Написать функцию, которая возвращает
 массив элементов, которые входят в оба массива без повторений. */
 let arr1 = [3, 5, 7, 4, 8, 6];
 let arr2 = [2, 5, 6, 8, 1, 9];

 let  unique = (arr1, arr2) => {
    let arr = Array.from(new Set (arr1.concat(arr2)));
    return arr
 }
 let arr3 = unique(arr1, arr2)
 console.log(arr3)

 //or
 
function getUnionOfArray(a, b) {
   let result = [];

   a.forEach((item) => {
      if (b.includes(item) && !result.includes(item)) {//b.indexOf(item) >=0 && result.indexOf(item) == -1
         result.push(item);
      }
   })

   return result;
}


console.log(getUnionOfArray([1, 2, 3, 2], [1, 2, 4, 1]));