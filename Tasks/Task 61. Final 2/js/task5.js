/*5. Дана строка, состоящее из слов между которыми может быть больше одного пробела.
 Удалить все лишние пробелы, т.е. оставить по 1 пробелу между словами, в том числе в
  начале и в конце.*/

let str = "   Удалить   все   лишние  пробелы   ";
  
  str = str.split("").filter(function (letter, i, array) {
      if (letter == " " && array[i + 1] == " ")
          return false;
      return true;
  }).join("");
  
  console.log(str);