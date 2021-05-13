console.log(22 + 7);
let a = 5;
a = 8 + a;
console.log(a);
//alert(a);
//можно использовать но не все браузеры поддерживают (для себя)
//out.innerHTML = '<i>Hi</i>';//позволяет использовать теги
//out.innerText = '<i>Hi</i>';//не брабатывает теги

//document.getElementById('out');// в текущем документе document. getElementById получить элемент по Id
//document.getElementById('out').innerHTML = 777;//корректный вариант
let p;
p = document.getElementById("out");
p = document.querySelector("#out"); //работает быстрее преведущей
p.innerHTML = 444; //выводим данные в параграф с id="out"
let c = "hello";
let d = "word";
console.log(c + d);
//1. let year = присвоить год рожденья. Задача вывести колличество лет в консоль. отнять текущий год от переменной.
//2. вывести полученный результат в параграф.
//3. вывести год и зделать его курсивом
let yearToDay = 2021;
let birthday = 1988;
let myYear;
let x;
myYear = yearToDay - birthday;
console.log(myYear);
x = document.querySelector("#age");
x.innerHTML = myYear;
