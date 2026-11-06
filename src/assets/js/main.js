const CURRENT_YEAR = 2026;

let birthYear = Number(prompt("Введіть рік народження:"));

let age = CURRENT_YEAR - birthYear;

alert("Ваш вік: " + age + " років");



let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));

alert(
    "Додавання: " + (num1 + num2) +
    "\nВіднімання: " + (num1 - num2) +
    "\nМноження: " + (num1 * num2) +
    "\nДілення: " + (num2 !== 0 ? num1 / num2 : "На нуль ділити не можна")
);



let hours = Number(prompt("Введіть години:"));
let minutes = Number(prompt("Введіть хвилини:"));
let seconds = Number(prompt("Введіть секунди:"));

if (
    Number.isInteger(hours) &&
    Number.isInteger(minutes) &&
    Number.isInteger(seconds) &&
    hours >= 0 && hours <= 23 &&
    minutes >= 0 && minutes <= 59 &&
    seconds >= 0 && seconds <= 59
) {
    alert("Час введено правильно: " + hours + ":" + minutes + ":" + seconds);
} else {
    alert("Помилка! Введіть коректний час.");
}



let month = Number(prompt("Введіть номер місяця (1-12):"));

switch (month) {
    case 1:
        alert("Січень");
        break;
    case 2:
        alert("Лютий");
        break;
    case 3:
        alert("Березень");
        break;
    case 4:
        alert("Квітень");
        break;
    case 5:
        alert("Травень");
        break;
    case 6:
        alert("Червень");
        break;
    case 7:
        alert("Липень");
        break;
    case 8:
        alert("Серпень");
        break;
    case 9:
        alert("Вересень");
        break;
    case 10:
        alert("Жовтень");
        break;
    case 11:
        alert("Листопад");
        break;
    case 12:
        alert("Грудень");
        break;
    default:
        alert("Неправильний номер місяця!");
}



let start = Number(prompt("Введіть початок діапазону:"));
let end = Number(prompt("Введіть кінець діапазону:"));

let sum = 0;

for (let i = start; i <= end; i++) {
    sum += i;
}

alert("Сума чисел у діапазоні: " + sum);