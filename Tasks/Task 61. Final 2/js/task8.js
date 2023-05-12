//8. Дано предложение. Найти символ, который чаще всего в нем встречается.

function most (str){
    return str.split("").reduce((arr,char)=>{
        let elem = str.split(char).length - 1;
        return elem > arr[1] ? [char,elem] : arr
    }, ["",0])[0]
}
console.log(most("мама мыла раму")) 

