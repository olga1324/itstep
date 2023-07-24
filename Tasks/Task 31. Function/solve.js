function deleteElementFromArrayByIndex(a, index){    
    for(let i = index; i < a.length - 1; i++){
        a[i] = a[i+1];
    }
    a.length--;
}

function fillRandomArray(a, n){ // a = b, n = 10
    // a - глобальной переменной
    // n - локальная внутри функции
    let min = 1, max = 10;
    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
//10. Дан массив из n элементов. Удалить все повторяющие элементы (удалить и сдвинуть следующие за ним).
let a = [];
fillRandomArray(a, 10);
console.log(a);
for(let i = 0; i < a.length; i++){
    //a[i] - искомый элемент
    let isFind = false; // проверка на нахождение копий элемента
    for(let j = i+1; j < a.length; j++){ // поиск копий, начиная с элемента, стоящего после нашего
        if(a[i] == a[j]){ // проверка на дупликат
            isFind = true; // нашли копию, значит себя тоже будем удалять

            // алгоритм удаления элемента с номером j со сдвигом всех элементов влево
            deleteElementFromArrayByIndex(a, j); 
            j--;         
        }
    }
    if(isFind){ // копии элемента найдены
        // алгоритм удаления элемента с номером i (сам элемент, копии которого надо было найти) со сдвигом всех элементов влево
        deleteElementFromArrayByIndex(a, i); 
        i--; // чтобы не пропустить элемент, который стал на место удаленного, мы должны остаться на том же номере, поэтому надо компенисровать переход к следующему (i-- и i++ дадут в сумме 0, то есть останемся на той же позиции)
    }
}
console.log(a);