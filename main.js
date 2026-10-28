const name = "Твоё имя";
const age = 20;
const isStudent = true;
const hobbies = ["чтение", "музыка", "спорт"];

console.log(name, age, isStudent, hobbies);

const num1 = 50;
const num2 = 10;

console.log("Сумма:", num1 + num2);
console.log("Разность:", num1 - num2);
console.log("Произведение:", num1 * num2);
console.log("Частное:", num1 / num2);

const personName = "John";
const personAge = 20;
console.log(`${personName} is ${personAge} years old`);

function getAgeStatus(personAge) {
  if (personAge < 13) return "Ребенок";
  if (personAge <= 17) return "Подросток";
  if (personAge <= 65) return "Взрослый";
  return "Пенсионер";
}

console.log(getAgeStatus(12));
console.log(getAgeStatus(16));
console.log(getAgeStatus(30));
console.log(getAgeStatus(70));

function checkEvenOdd(number) {
  return number % 2 === 0 ? "Четное" : "Нечетное";
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));

function checkRideAccess(rideAge, height) {
  if (rideAge < 5) return "Слишком мал";
  if (rideAge <= 12) return "Добро пожаловать";
  if (rideAge <= 18 && height > 160) return "Добро пожаловать";
  return "Не разрешено";
}

console.log(checkRideAccess(4, 150));
console.log(checkRideAccess(10, 140));
console.log(checkRideAccess(15, 170));
console.log(checkRideAccess(15, 160));
console.log(checkRideAccess(25, 180));

for (let i = 1; i <= 10; i++) {
  console.log(`7 × ${i} = ${7 * i}`);
}

function sumNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNumbers(5));

let countdown = 20;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}

const grades = [5, 4, 3, 5, 2, 4, 5];

grades.forEach(grade => console.log(grade));

const gradesSum = grades.reduce((sum, grade) => sum + grade, 0);
const averageGrade = gradesSum / grades.length;
const highestGrade = Math.max(...grades);

console.log("Сумма оценок:", gradesSum);
console.log("Средняя оценка:", averageGrade);
console.log("Максимальная оценка:", highestGrade);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];

function findCity(arr, city) {
  return arr.indexOf(city);
}

console.log(findCity(cities, "Ош"));
console.log(findCity(cities, "Нарын"));

const student = {
  name: "Али",
  age: 20,
  courses: ["JavaScript", "HTML", "CSS"],
  isActive: true
};

console.log(student);
student.age += 1;
console.log(student.age);

for (const course of student.courses) {
  console.log(course);
}

const product = {
  name: "Ноутбук",
  price: 50000,
  quantity: 2
};

function getTotalCost(product) {
  return product.price * product.quantity;
}

console.log(getTotalCost(product));

const books = [
  { title: "Книга 1", author: "Автор 1", year: 2000 },
  { title: "Книга 2", author: "Автор 2", year: 1995 },
  { title: "Книга 3", author: "Автор 3", year: 2010 }
];

books.forEach(book => console.log(book));

const oldestBook = books.reduce((oldest, book) =>
  book.year < oldest.year ? book : oldest
);

console.log(oldestBook);

const calculateDiscount = (price, discount) =>
  price - price * discount / 100;

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(2500, 20));

function getGrade(score) {
  if (score >= 80 && score <= 100) return "A";
  if (score >= 60 && score < 80) return "B";
  if (score >= 40 && score < 60) return "C";
  if (score >= 0 && score < 40) return "F";
  return "Некорректный балл";
}

console.log(getGrade(90));
console.log(getGrade(70));
console.log(getGrade(50));
console.log(getGrade(30));

function getMaxNumber(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

console.log(getMaxNumber([3, 8, 2, 10, 5]));
console.log(getMaxNumber([-4, -1, -9]));

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);

  taskInput.value = "";
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "Светлая тема" : "Темная тема";
  themeBtn.style.color = isDark ? "white" : "black";
});