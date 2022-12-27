//1.Чему будет рано значение переменной a после выполнения кода?

var a = 5; // var имеет глобальную или ф-ную область видимости
let a; 
/* let видна только в бллоке цикла и не видна снаружи, поэтому выведет ошибку кода.
let имеет блочную область видимости, не позволяет переопределять
 переменные с одинаковыми именами в одном блоке, a var позволяет. var существует до объявления, 
 а let видна только после объявления. let нельзя повторно объявлятью
 let не инициализирует переменную значением underfined, а var делает это автоматически.
 у let более строгие правила*/
console.log(a) // код содержит ошибку.*/

//? 2.Какое значение будет выведено на экран после выполнения кода?

function count() {
    for (var i = 0; i < 3; i++) {
      var j = i * 2;
    }
   return i+j;
  }
   
 console.log(count()); //7

//? 3.Что будет выведено в консоль?

console.log(+false, +null, +undefined); // 0 0 NaN

//4.Что выведет этот код?

var obj = {
    "0": 1,
    0: 2
     // 0 заменяется на  "0" и он становится равным 2. В итоге 2 + 2 = 4
   };
    
console.log(obj["0"] + obj[0]); //4

//? 5.Что выведет этот код?

a = 2, с = 0;
var b = a + a * a / с;
console.log(b); //infinity

//? 6.file.js содержит следующий код:

console.log(1);

//Что будет выведено при подключении следующей конструкции?
<script src="file.js">
  console.log(2);
</script> // ничего???

//? 7.После выполнения этого кода – в каких объектах из списка содержится свойство name?

function User() { }
var vasya = new User();
vasya.__proto__.name = "Vasya";

//? 8.Какое из следующих выражений вернет false?


undefined == 0 // false


'' == false // true


null >= 0 // true


null == undefined // true


'2' > 1 // true

//9.Сколько раз будет показано сообщение тик и стоп после запуска скрипта?

var timerId = setInterval(function() {
    console.log( "тик" );
  }, 2000);
  
  setTimeout(function() {
    clearInterval(timerId);
    console.log( 'стоп' );
  }, 6000); //2 раза тик и 1 раз стоп

// ?10.Чему равно 0 || 1 && 2 || 3 ?

//2

//11.Чему равно значение x?

var x = "a"*2;
if(x === NaN)
   x = 1;
else
   x = x*x;

console.log(x); // nan

// ? 12.Какой из следующих логических операторов при сравнении null c 0 возвращает true?


>= // true


> //false


== //false


< //false


===

// ???13.Чему равно значение переменной a?

var a = null == undefined;

//14.Чему равно значение переменной x?

var x = "1";
if ("0")
   x++;
else
   x+=3;

console.log(x); //2

//???15.Какой будет результат выполнения функции?

(function(){
    return typeof arguments;
})() // object

//?16.Чему равно значение выражения?

typeof {} + " " + typeof function () { }; //object function

//17.Что будет выведено в консоль?

let b = 3

function F(){
    var a = 1;
    if( a == 1){
        var b = 2;
    }
    return b;
}

console.log(F()) //2

//???18.Какая из следующих переменных названы неверно с точки зрения синтаксиса?


1a


_$


_a


$a


$_
//19.Чему равно значение переменно z?

var x = 1;
if(x)
   {
   let y = 3;
   }
else
   {
   let y = 2;
   }
let z = x+y; // ошибка???

//20.Что будет выведено в консоль?

var n = [4,6,19,34,32];
console.log(n.sort()) //[19,32,34,4,6] - сортирует по первой цифре 1,3,4,6

//21.Что будет выведено в консоль браузера?

function a(){
    console.log(this)
}

a.call(null) // ???object Window


//? 22.Что будет выведено в консоль?

console.log(+function(val){ return val; }) // nan

//23.Какое количество раз выполнится цикл?

for(var i=0; i<10; i++){
    ++i;
}
//10 

//24.Что будет выведено в консоль?

const myObj = {
    name: "student"
}

console.log(myObj.hasOwnProperty('name'));//true

//25.Что будет выведено в консоль?

var a = Array();
a[a.length] = 0;
console.log(a.length) //1

//26.Результат выполнения кода?

function sum(a, b = a){
    console.log(a+b)
}

sum(10);//20

//27.Что будет выведено на экран?

console.log('0xFF     ' - '1');//254

// 0xFF представляет собой 16ричное значение FF и равно 255. 255-1=254

//28.Результат выполнения кода?

console.log(true + "test"); //truetest

//29.Результат выполнения кода?

var a = 12;
(function run(){
    console.log("a = ", a);
    var b = 500
})()
console.log("a = ", a);
console.log("b = ", b);
/*a = 12
a = 12
ReferenceError*/ //b объявлено внутри ф-ции ??

//???30.Чему будет равно значение x[0] и x===y после исполнения данного кода?

var x = [];
var y = x;
y[0] = 7;

//31.Что будет выведено в консоль?

var a;
switch(a){
    case 0:
        console.log(0);break;
    case null:
        console.log(null);break;
    case undefined:
        console.log(undefined);break;
    default:
        console.log("something else");
} //undefined

//32.Что будет выведено в консоль?

let s = "Hello"
s[4] = ""
console.log(s); //Hello

//33.Какой код выведет список свойств объекта в консоль?


var student = {
    name: "Mark",
    age: 25
}
/*for (let i in student) {
    console.log(i)
}  // выведет name, age. Мы перебираем ключи объекта 
с помощью цикла.в каждом цикле мы устанавливаем значение i 
равным текущему ключу по которому он перебирается. сначала i
равен name  и выводится в консоль. затем age 

for(let i in student){
    console.log(student[i])
} // выведет Mark, 25
*/

//?34.Какой будет результат выполнения кода?

var a = 3;

switch(a){
    default:
        a += 4;
    case 1:
        a += 2;
        break;
    case 2:
        a += 3;
        break;
}

console.log(a) //9

//35.Что выведет данный код в консоль?

console.log(checkValue(a));
var a = 1;
function checkValue(value){
    if(value){
        return +!!a;
    } else {
        return !!a;
    }
} //false;

//36.Какой будет результат выполнения кода?

const n = parseInt("7*6", 10)
console.log(n); //7
/* parseInt проверяет являются ли символы в строке
 допустимыми с точки зрения используемой системы
исчесления. Как только появляется недопустимый символ
анализ прекращается и следующие символы игнорируются.
* являетсянедопустимым числом. Поэтому проверка заканчивается на 7*/

//37.Какой результат будет выведен в консоль?

function Test(){}

var test1 = new Test()
Test.prototype.member = "World";
var test2 = new Test();

console.log(test1.member, test2.member) //World World

//38.Какого из побитовых операторов нет в JS?


# // нету


>>> // есть. правый сдвиг с заполнением нулями


^ // есть. побитовое исключающее ИЛИ


& // есть. побитовое И


~ // есть. побитовое НЕ

//????39.Какого ключевого слово не хватает в функции, перед переменно privet, чтобы код выводил в консоль "Hello!"?

function say(){
    var privet = "Hello!";
    _______ priver;
}

console.log(say) //не возможно решить данную задачу

//?40.Что будет выведено в консоль?

var obj = { a: 2 };
function f(obj){
    obj = { a: 3};
}
f(obj);
console.log(obj.a) //2

//41.Какая функция в JS округляет число к наибольшему целому?


Math.ceil // округляет до ближайшего большего целого


ceil


math.ceil


Math.floor // округляет до ближайшего меньшего целого


floor
//42.Чему должен быть равен Х в строке 2, чтобы для переменной answer было присвоено значение true?

var a = [8, 16, 24, 32, 40, 58];
var answer = a[X] % 8 !== 0;
console.log(answer) //5

//?43.Что будет выведено в консоль в обоих случаях?

var r = ['a','l','p','h'];
r.length = 10;
console.log(r.length);
delete r[0];
console.log(r.length); //10 10

//44.Каков результат выполнения следующего кода?

var nums = [1,2,3,4];
nums.pop() // удаляет последний элемент 4
nums.push(5); // добавляет 5 в конец
console.log(nums) //1,2,3,5

//45.Какой из вариантов будет выводить "Wake up" каждые 10 минут?


setTimeout(console.log("Wake up!"), 600 000) // 10 * 60 * 1000


setTimeout(console.log("Wake up!"), 600)


setTimeout(console.log("Wake up!"), 60000)


setTimeout(console.log("Wake up!"), 36000)


setTimeout(console.log("Wake up!"), 3600)

//????46.Что вернет функция после выполнения?

Total = 3;

function whatIsReturned(){
    var total = 1;
    var TOTAL = 2;

    return total;
}
//47.Что будет выведено в консоль?

result = 0;
function add(x){
    result += x;
    return result;
}

console.log(add(add(10))) //20

//48.Какой результат будет выведен в консоль?

class SomeThing {}

console.log(typeof SomeThing) //function

//49.Что будет выведено на экран?

let i = 0;
while (++i < 5) // ++i сначала происходит вычисление, а потом возвращается измененное значение переменной
    console.log(i); //Числа от 1 до 4

//50.Какой из методов объекта Date вернет текущее время прошедшее с 1/1/1970 в миллисекундах?


getTime() // для заданной даты возвращает таймстамп - количество миллисекунд, прошедших с 1 января 1970 года


getDate()// получить день месяца от 1 до 31


getMilliseconds() // получить милисикунды


getMillisecondsDate()

никакой из перечисленных вариантов

//51.Что будет выведено на экран?

let i = 0;
while (i++ < 5) // i++ сначала возвращается текущее значение 5, и только потом происходит вычисление
    console.log(i);

//Числа от 1 до 5
//52.Что будет выведено в консоль?

function a(){
    return ("works")
}

var b = a("not");
console.log(b) //works

//53.Каким будет результат выполнения следующего кода?

console.log(parseInt(1 / 0, 19)) //18

/* 1 / 0 преобразуется в Infinity . parseInt обрабатывает 
первый аргумент как строку.  он сканирует ввод "бесконечность"
б чтобы определить какая его часть может быть проанализирована
 и останавливается после принятия первого I ( т.к. n не является
 допустимой цифрой в базе 19)поэтому он ведет себя так как если
вызвана ("I", 19) который преобразуется в десятичное число 18 .
 он игнорирует оставшуюся часть строки т.к. ее нельзя преобразовать
("бесконечность",19). в базе 19 числа 0-9 и A-I являются допустимыми
 числами*/

//54.Каким будет результат выполнения следующего кода?

console.log(null+true+0) //1  true =1

//?55.Что будет выведено на экран?

const arr = [3,4,5]
for(let item in arr){
    console.log(item)
} //0 1 2 

for(let item of arr){
    console.log(item)
} //3 4 5

//0 1 2 3 4 5

//? 56.Что будет выведено в консоль?

function f(x,y,z){
    x = 5;
    arguments[2] = 10;
    console.log(x+y+z)
}

f(-1,0,2) //15
//?57.Что будет выведено в консоль?

const set = new Set([1,1,2,3,4]);
console.log(set) //{ 1, 2, 3, 4 }

//?58.Чему будет равно значение следующего выражения в JS?

console.log([] + {}) //[object Object]

//?59.Чему будет равно значение выражения?

console.log([] + []) //пустая строка

//60.Что будет выведено в консоль?

(function(foo){
    arguments[0] = 42;
    console.log(foo);
})(5) //42

//?61.Что выведен данный код?

var a = 2;
console.log(~a) // -3

//62.Что будет выведено в консоль?

console.log(false == undefined, false == null, null == undefined);
/*false false true. null == undefined и больше они не сравнимы ни с чем. 
в других случаях всегда будет false*/

//63.Каков будет результат выполнения кода?

function f(a,b,c){}
var a = [,,,]

console.log(a.length,f.length) //3 3 
//?????64.Какая опция позволяет установить hasName равным true, если вы не можете передать true в качестве аргумента?

function getName(name){
    const hasName = ___ ;
}

//65.Что будет выведено в консоль?

var a = 44;
(function(){
    var b = 44;
    a = '55'; // превращает все в строку
    (function(){
        var c = 11;
        console.log((a+b)/c); //("55" + 44)/ 11 == "5544" / 11 == 504
    })();
})();  //504

//66.Что будет выведено в консоль?

function sum(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

let a = sum(5, -5, false, '-5', 5); // 5+(-5) + 0 + "-55" = "0-55"
console.log(a); //0-55

//67.Что будет выведено в консоль?

var a = new Array(5).join('5');
console.log(a); // 5555
/* "5" это разделитель между элементами. мы имеем 5 элементовб 
но между ними будет только 4 разделителя*/

//?68.Что будет выведено в консоль?


let str = "I love JavaScript";
console.log(str.substring(3, 3)); //пустая строка

//?69.Чему будет равен результат выполнения кода?

let a = -1;
let b = 0.25;
console.log( a == ~b^0) //1

//70.Какие из вызов parseFloat() не возвратят число?


parseFloat() //nan


parseFloat("27.2 m") //27.2


parseFloat("27,2") //27


parseFloat(".2") //0.2


parseFloat("56,") //56

//,71.Что будет выведено на экран?

var x;
x = 'x0ff' - 1; //x0ff - число представленное в 16ричной системе исчесления 
if(x != x)
    console.log(true);
else
    console.log(x); //true

//72.Что будет выведено в консоль?

let a = null;
let b = undefined;

console.log(a ?? b) //undefined
/* ?? опреатор нулевого значения . выводит первое определенное значение
 undefined означает что переменная была обьявлена но ей еще не присвоено значение
 null это объект,undefined сам тип*/

//? 73.что будет выведено в консоль?

console.log([..."JS"]) //['J', 'S']

//74.Что будет выведено в консоль?

let a = NaN; // специальное значение типа Number для выражения "не чиел"ю
let b = 1;

console.log(a ?? b) //nan 

//75,Какой результаты будет выведен в консоль?

function a(param) {
    let m = param; //10
    m = m + 10;   //10+10 =20
    return m + param; //20+10=30
}

function b(param) {
    let n = param; //10
    n = 20;
    return param + n;//10+20 =30
}

console.log(a(10), b(10)); // 30 30

//???76.Что будет выведено в консоль?

console.log(
    (function () {
        var a = true + false;
        a;
    })()
)
//undefined

//77.Чему будет равно значение выражения?

null || "0" || undefined || false || NaN //"0"

// || выводит первую истину или последнюю ложь . null - false. undefined, false, nan - false

//78.Что будет выведено в консоль?

for (var i = 0; i < 9; i += 2) {
    if (++i == 5)
        break;
    else
        continue
}

console.log(i++) //9 
// 1 + 3 + 5 = 9 ?

//79.Что будет записано в поле name после выполнения кода?

const user = {
    name: "Вася"
};

user.name = "Петя"; //Петя

//??80.Чему равно значение переменной x?

let x = ~-1; //0

//??81.Что будет выведено на экран?

"use strict";
a = null + undefined;
console.log(a); //Код содержит ошибку

//82.Что выведет код?

console.log(+"Infinity"); //Infinity

//83.Что будет выведено на экран?

"use strict";
console.log(typeof null) //object 
// объект string

//84.Чему будет равно значение переменной x?

for (let i = 0; i < 10; i++) {
    console.log(i);
} //  от 0 до 9
let x = i; //Код содержит ошибку

//85.Чему будет рано значение выражения?

true + false //1
//86.Чему выведет на экран данный код?

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
//10 раз число 10

//87.Что выведет данный код?

if (function f() { }) {
    console.log(typeof f);
}
//undefined

//88.Чему равно значение выражения?

[].push(1, 2).unshift(3).join()
//код содержит ошибку

//89.Какой из этих вариантов задает массив из элементов "a" и "b"?


let a = ["a", "b"] //true


let a = "a,b".join(",")


let a = ("a", "b")


let a = { "a", "b" }


let a = new array("a", "b")

//90.Что выведет код?

let a = [1, 2]
    (function () {
        console.log(a)
    })() //Код содержит ошибку

//91.Что выведет код?

const f = (a, b) => a + b;
console.log(f) //Код функции f

//92.Что выведет на экран следующий код?

console.log(Math.ceil(Math.random())); //1

//Math.ceil возвращает наименьшее целое число

//!93.Какой результат будет выведен в консоль?

console.log(0 / 0); //nan 
// неопределенность

//94.Что будет выведено в консоль?

let array = ['1', '2', '3'].map(parseInt);
console.log(array)// [1, NaN, NaN]
/* parseInt выполняет синтоксический разбор строки , 
если превый символ является цифрой или знаком (+ или -)
то она переходит ко второму символу. покане будет обнаружен 
символ который не может быть преобразован в числовое значение.
если первый символ не получается сконвертировать в число 
возвращает NaN*/

//95.Что будет выведено в консоль?

function sum(a, b, c) {
    arguments[2] = 10;
    return a + b + c;
}

console.log(sum(1, 2, 3)) //13
//1+2+10=13

//???96.Какой результат будет выведен на экран?

var a = 1;
var b = ++a + a;
console.log(b); //4

//?97.Какой результат будет выведен на экран?

var a = new Array();
a['key'] = 'value';
console.log(a.length); //0

//?98.Что будет выведено в консоль?

function Test(param) {
    this.var1 = param;
    var var2 = 'World'
}

var test = new Test('Hello');
console.log(test.var1, test.var2);
//Hello undefined

//99.Что будет выведено на экран?

var a1 = "wrong"
function a() { return "1st"; }
function a(val) { this.a1 = "right"; return "2nd"; }
console.log(new a().a1); //right

//?100.Что будет выведено в консоль?

let a = [], b = [];
console.log(a == b, a != b, !a == b, !a == !b);

//false true true true

//101.Что выведет на экран следующий код?

console.log(Math.floor(Math.random())); //0

//?102.Что будет выведено в консоль?

var a = 1;
function f() {
    console.log(a);
    var a = 5;
}

f(); //undefined

//103.Какой результат будет выведен в консоль?

var a = [];
console.log(a == a, a != a); //true false

//?104.Что будет выведено в консоль?

class Something { }
const someObj = new Something();
console.log(typeof someObj == typeof Something) //false

//?105.Что будет выведено в консоль?

let a = isNaN("2014");
console.log(a);//false
//nan - false 

//?106.Что будет выведено в консоль?

var n = 3;
var b = true;
n = n.toString(2) + Number(b) + n.toString() - 3 + !Number(b);
console.log(n); //1110

//?107.Укажите все корректные утверждения относительно цикла for?


второе выражение в описании цикла обычно определяет условие продолжения выполнения цикла


третье выражение в описании цикла обычно определяет условие выхода из цикла


второе выражение в описании цикла обычно создает контрольную переменнную


первое выражение в описании цикла обычно увеличивает счетчик цикла


первое выражение в описании цикла обычно определяет условие выхода из цикла

//108.Что будет выведено в консоль?

console.log(null == undefined) //true
// и больше они не сравнимы ни с чем. в других случаях false

//109.Как сгенерировать случайное целое число от 1 до 10?


Math.floor((Math.random() * 10) + 1); //true


Math.random(10) + 1;


Math.random() * 10 + 1;


Math.floor(Math.random(10) + 1); // true


Math.floor(Math.random() * 10); //true

//110.Что будет выведено в консоль?

let squares = [2, 4, 6,].map(x => x * x);
[a, b] = squares;
console.log(a + b) //20
// 2*2 + 4*4 = 20

//?111.Что будет выведено в консоль?

var ch1 = "b";
var ch2;
switch (ch1) {
    case 'a':
        ch2 = '1';
    case 'b':
        ch2 = '2';
    case 'c':
        ch2 = '3';
        break;
    default:
        ch2 = '4';
}
console.log(ch2) //3

//112.Что будет выведено в консоль?

var a = [],
    b = 1,
    c = false,
    d = [];

console.log(typeof (b == c), a == d)
 //boolean false

//113.Какой из вариантов позволит трансформировать объект в JSON?


JSON.stringify() //true


JSON.toString()


JSON.parse()


Object.prototype.toJSON();


Object.toJSON();
//?114.Что выведет данный код?

console.log(id);
var id = '2'; //undefined

//115.Что будет выведено в консоль?

const obj = { a: 1 };

(function (obj) {
    obj = { a: 2 };
})(obj);

console.log(obj.a);

(function (obj) {
    obj = { a: 3 };
})(obj);

console.log(obj.a); //1 1

//116.Каким образом добавить новый элемент в массив?

const a = []; //a.push(element);

//117.Какой результаты будет выведен в консоль?

var obj = function () {
    this.name = "Alex";
    var that = {};
    this.name = "David";
    var name = this.name + " && " + that.name;
    return name;
}

var o = new obj();
console.log(o.name); //David

//?118.Что выведет следующий код?

const list = [1, 2, 3].push(4);
console.log(list.push(5));
//код содержит ошибку

//119.Что будет выведено в консоль?

"use script"

const strs = ["I", " ", "am", " ", "Iron", " ", "Man"]
const result = strs.reduce((item, index) => item + index, "")
console.log(result)
//I am Iron Man

//120.Что будет выведено в консоль?

var a = 2;
a = a << 2;
console.log(a); //8
// a << b сдвигает а на b битов влево, добавляя справа нули. сдвинуть на 1 все равно что умножить на 2. 2*4=8

//?121.Что произойдет после выполнения кода?

var foo = function () {
    return {
        a: 1,
        b: 2
    }
} //переменной foo присвоится код функции

//122.Что будет выведено в консоль?

var a = 2;
a = a >> 2;
console.log(a); //0
//// a >> b сдвигает а на b битов вправо,сдвинуть на 1 все равно что поделить на 2. 2/4=

//123,Каков будет результат выполнения следующего кода?

var a = 1;
var c = a++ + 1; // c=1+1=2. затем а++=2. сначала выполняется действие потом прибовляется 1 к а
console.log(a, c) // 2 2

//124,Что будет выведено в консоль?

var str;
let i = '0';
console.log(str + i); //undefined0
//str до присваивания равно undefined + "0" =undefined0

//125,Что будет выведено в консоль?

const list = [1 + 2, 1 ** 2, 1 / 2];
console.log(list) //[3, 1, 0.5]

//?126.Какой результат будет выведен в консоль?

const a = new Number(1) === 1;
console.log(a) //false

//???127.Что будет выведено в консоль?

console.log(typeof typeof null) 
//string

//???128.Что будет выведено в консоль?

console.log(typeof typeof undefined) //string

//?129.Что выведет следующий код?

function sayHi(name) {
    return `Hi there, ${name}`
}

console.log(sayHi()) //Hi there, undefined

//?130.Что выведен следующий код?

console.log(1);
js: {
    console.log(2);
    break js;
    console.log(3);
}
console.log(4); //1, 2, 4

//131.Сколько раз сработает вызов console.log()?

for (i = 5; i < 10; i++) {
    for (j = i; j < i + 1; j++) {
        console.log(j)
    }
} //5

//132.Какое из следующих объявлений переменной является некорректным?


const x


let x


var x


x


x = 1

//133.Что будет выведено в консоль?

let s = 'myjs';
console.log(s.split(",", 6)); //['myjs']
// если совпадений нет, возвращается исходная строка

//134,Что выведет следующий код?

console.log("Hello!' +"_"+ "World!');
//ошибку . ковычки должны быть одинаковыми

//135,Как можно вывести сообщение "Hello World!" с помощью JS?

console.log('Hello World'); // true


msg('Hello World');


msgBox('Hello World');


console.logBox('Hello World');


console('Hello World');

//136.Какое основное отличие Function Declaration от Function Expression?
/*функции, объявленные как Function Declaration, создаются 
интерпретатором до выполнения кода.
Function Expression создаяется только в момент когда итератор 
дойдет до данной строки кода*/

//?137.Чему равно значение строки str?

var str = "мама";
for (var i = 0; i < str.length; i++)
    if (!(i % 2))
        str[i] = "п";

        //мама

//138.Что будет выведено в консоль?

a = false;
if (a == '0')
    console.log(1)
if (a === '0') // строгое сравнение
    console.log(2) //1

//???139.Что будет выведено на экран?

function a(value) {
    return true - value;
}

var b = a('4') + a('-4') + a('-4') + a(4);
console.log(b); //4

//140.Какая арифметическая операция приводит к ошибке в JS?


Никакая из перечисленных //true


Деление на ноль // infinity

 
Умножение числа на строку //nan


Корень из отрицательного числа //nan


Вычитание строки из числа //nan

//141.Что будет выведено в консоль?

const str = { job: "JS" }
console.log(typeof str); //object

//?142.Что будет выведено в консоль?

function a(value) {
    return true + value;
}

var b = a('4') + a('-4') + a('-4') + a(4);
console.log(b);
//true4true-4true-45

//?143.Чему равно значение выражения 4 - "5" + 0xf - "1e1" в JS?
//4  - Числу

//???144.Сто будет выведено в консоль?

function a(value) {
    return true * value;
}

var b = a('4') + a('-4') + a('-4') + a(4);
console.log(b); //0

//145.Чему равна длина arr.length массива arr?

var arr = [];
arr[1] = 1;
arr[3] = 33;
//4 [0123]

//146.Что будет выведено в консоль?

var str = "MyTestingString";
console.log(str.slice(2, 8), str.substr(2, 8), str.substring(2, 8))
//Testin TestingS Testin

//147.Что будет выведено в консоль

const obj = new Object();
console.log(obj.a);
obj.a = 5;
console.log(obj.a);

//undefined и 5

//148.Чему выведет на экран данный код?

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}

//Числа от 0 до 9
