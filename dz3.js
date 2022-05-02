//Module3--Task1
var num1 = prompt("Enter first diapozone")
var num2 = prompt("Enter second diapozone")
var sum = 0;

while (num1 < num2) {

    num1++;
    sum += num1;
}

alert(sum)
    //Task2
function NOD(num1, num2) {
    if (num2 === 0) {
        return num1;
    }
    return NOD(num2, num1 % num2);
}
var [num1, num2] = prompt("Enter number").split('.').map(Number);
alert(NOD(num1, num2));
//Task3
function allDividers(num) {

    var array = [1];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0 && num == !num && num == !1) {
            array.push(i);
        }
    }
    array.push(num);
    return array;
}
var res = prompt("Enter number");
alert(allDividers(res));
//Task 4
var a = prompt("Enter number");
alert(String(a).length)
    //Task5
var arr = prompt("Enter 10 number").split(',').map(Number);
var zero = 0,
    positive = 0,
    negative = 0;
arr.forEach(item => {
    if (item > 0) { positive++; } else if (item < 0) { negative++; } else { zero++ };
});
alert(`There are ${zero} zero, ${positive} positive and ${negative} negative numbers`);
//Task6
do {
    var [num1, symb, num2] = prompt("Enter operation 'a + b'").split(' ');
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    var res = 0;
    switch (symb) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num1 / num2;
            break;
        default:
            res = NaN;
            break;
    }

    alert(`${num1} ${symb} ${num2} = ${res}`);

    var ok = confirm("Continue?");
} while (ok);
//Task7
let str = prompt("Enter number!");
let k = prompt("How many digits to move it?");

alert(str.substring(k) + str.substring(0, k));
//Task8
var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'saturday',

];
let currDay = 0;

while (confirm(`${days[currDay]}. Would you like to see next day?`)) {
    currDay = (currDay + 1) % days.length;
}
//Task9