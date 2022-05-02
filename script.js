//Modul1 --Task1
var name_ = prompt("What is your name?");
alert(`Hi, ${name_}`);
//Task2
const year = 2022;
var birthday = prompt("When is your birthdate?")
alert(`Your are, ${year-birthday} year old`)
    //Task3
var side = prompt("Lentgh of square?");
alert(`Perimetr of square is ${side*4}`);
//Task 4
var radius = prompt("Radius of circle?");
alert(`Area of circle is ${radius**2*Math.PI}`);
//Task5
var distance = prompt("Distance between cities?:");
var time = prompt("Time in order to reach from one city to another?:");
alert(`Average speed ${distance/time}`);
//Task6
const currency = 1.7;
var dollar = prompt("Dollar?:");
alert(`Manat: ${dollar*currency}`);
//Task7
var size = prompt("GB area:") * 1024;
alert(`${Math.floor(size/820)} files with 820mb can ve saved here`);
//Task8
var wallet = prompt("Sum of money in wallet:");
var chocolate = prompt("Price of chocalete($):");
alert(`You can buy ${Math.floor(wallet/chocolate)} chocalates and  ${wallet%chocolate}$  will remain`);
//Task9
var num = prompt("Enter number:");
var num2 = 0;
for (let i = 0; i < num.toString().length; i++) {
    num2 += (Math.floor(num % (10 ** (num.toString().length - i)) / (10 ** (num.toString().length - i - 1)))) * (10 ** i);
}
alert(num2);
//Task10
var num = prompt("Enter number:");
alert(num % 2 === 0 ? "The number is even" : "The number is odd");


//Module2--Task1
var age = prompt("How old are you:");
var response = "";
switch (true) {
    case age < 3:
        response = "baby";
        break;
    case age < 12:
        response = "child";
        break;
    case age < 18:
        response = "teenage";
        break;
    case age < 60:
        response = "adult"
        break;
    default:
        response = "retiree";
        break;
}
alert(response);
//Task2
var num = prompt("Enter number between 0-9");
var symbol = "";
switch (Number.parseInt(num)) {
    case 0:
        symbol = ")";
        break;
    case 1:
        symbol = "!";
        break;
    case 2:
        symbol = "@";
        break;
    case 3:
        symbol = "#";
        break;
    case 4:
        symbol = "$";
        break;
    case 5:
        symbol = "%";
        break;
    case 6:
        symbol = "^";
        break;
    case 7:
        symbol = "&";
        break;
    case 8:
        symbol = "*";
        break;
    case 9:
        symbol = "(";
        break;
    default:
        symbol = "Wrong entree";
        break;
}
alert(symbol);
//Task3
var num = prompt("Enter number which consist of 3 digits");

num = Number.parseInt(num).toString();
var count = 0;
for (let i = 0; i < num.length - 1; i++) {
    for (let l = i + 1; l < num.length; l++) {
        if (num[i] === num[l]) {
            alert("It has same digits");
            count++;
        }
    }

}
if (count !== 0) alert("It does not have same digits");
//Task4
var year_ = prompt("Enter year");
alert(year_ % 400 === 0 || (year_ % 100 != 0 && year_ % 4 === 0) ? "leap year" : "Not a leap year");
//Task5

function palindromeChecker(str) {
    str = num.toString();
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}
var num = prompt("Enter number");

alert(palindromeChecker(num) ? "Palindrom" : "Not palindrom");
//Task6

var exchange = prompt("Enter currency you want to get (available: USD, EUR, UAN, AZN)");
var sum = prompt("Enter amount");
var ex1 = sum;
switch (exchange) {
    case 'EUR':
        sum /= 1.13;
        break;
    case 'UAN':
        sum /= 0.035;
        break;
    case 'AZN':
        sum /= 0.59;
        break;
}

alert(`${ex1} USD = ${sum} ${exchange}`);
//Task7
var sum = prompt("Enter amount of shopping");
switch (true) {
    case sum >= 500:
        sum *= 0.93;
        break;
    case sum >= 300:
        sum *= 0.95;
        break;
    case sum >= 200:
        sum *= 0.97;
        break;
    default:
        break;
}
alert(`Sale is: ${sum}`);
//Task8
var diameterofcircle = prompt("Diametr of circle:") / Math.PI;
var perimetrofsquare = prompt("Perimetr of square:") / 4;
alert(diameterofcircle <= perimetrofsquare ? "True" : "False");
//Task9
alert("Answer 3 questions:");
var score = 0;
while (1) {
    var q1 = parseInt(prompt("1*1= (0|1|2)"));
    if (q1 === 0 || q1 === 1 || q1 === 2) {
        q1 == 1 ? score++ : alert("Wrong answer!");
        break;
    }
};

while (1) {
    var q2 = parseInt(prompt("1+1= (0|1|2)"));
    if (q2 === 0 || q1 === 1 || q1 === 2) {
        q2 == 2 ? score++ : alert("Wrong answer!");
        break;
    }
};

while (1) {
    var q3 = parseInt(prompt("√1= (0|1|2)"));
    if (q3 === 0 || q1 === 1 || q1 === 2) {
        q3 == 1 ? score++ : alert("Wrong answer!");
        break;
    }
};
alert("Your score:" + score);
//Task10
var date = prompt("Enter date dd/mm/yyyy");
var [dd, mm, yyyy] = date.split('/').map(Number);
dd += 1;
var totaldays = 0;
switch (mm) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        totaldays = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        totaldays = 30;
        break;
    case 2:
        totaldays = (yyyy % 400 === 0 || (yyyy % 100 !== 0 && yyyy % 4 === 0)) ? 29 : 28;
        break;
    default:
        break;
}
if (dd > totaldays) {
    dd -= totaldays;
    mm += 1;
}
if (mm > 12) {
    mm -= 12;
    yyyy += 1;
}
alert(`Next date is: ${dd}-${mm}-${yyyy}`);