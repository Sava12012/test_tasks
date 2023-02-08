//===============================Модуль 2 - Масиви Функції []
// =========== Перевірка на масив: 
// let friends = ['vova', 'bob', 'anna', 'dima', 'nata']
// console.log(friends)

// let nums = [1, 2, 3, 4, 5];
// console.log(nums);
// console.log(Array.isArray(nums));


// =========== Пошук по масиву: [].indexOf()

// let friends = ['vova', 'bob', 'anna', 'dima']
// let result = friends.indexOf('dima');
// console.log(result);


// =========== Додає в кінець 1 або декілька елементів: [].push();

// friends.push("sveta", 200, "lena");
// console.log(friends);

// =========== Видалити з масиву: [].splice()

// friends.splice(1);
// friends.splice(1, 1);
// friends.splice(1, 1, "pizza");
// console.log(friends)

// =========== Видалити з масиву: [].slice()

// 1 Зробити копію масиву:
// const nums = [10, 20, 30, 40];
// console.log(nums);
// const nums_2 = nums.slice();
// console.log(nums_2)

// 2 Ріжем самив за допомогою.slice

// const nums = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(nums);

// // let nums_2 = nums.slice(1);
// let nums_2 = nums.slice(-2);
// console.log(nums_2);

// =========== Склеювання масивів: [].concat()

// const nums = [10, 20, 30, 40, 50, 60, 70, 80];
// const resultArr = friends.concat(nums);
// console.log(resultArr)

// копія масиву:
// const friends = ['vova', 'bob', 'anna', 'dima', 'nata']
// const nums = [10, 20, 30, 40, 50, 60, 70, 80];
// const resultArr = nums.concat();
// console.log(resultArr === nums);

// =========== Перетворення строку в масив: [].split('')

// let str = "abcdef"
// let res = str.split("");
// console.log(Array.isArray(res));

// =========== Перевернення масиву в іншу сторону:

// const str = "abcdef"
// const res = str.split("").reverse().join("");
// console.log(res);

// =========== Перебираєм масиви:  метод for();

// const friends = ['bober', 'anaconda', 'pizza', 'apple']
// const allfriends = friends.length;
// for (let i = 0; i < allfriends; i += 1) {
//     console.log(friends[i]);
//     console.log(i, friends[i].length);
// }

// =========== Перебираєм масиви:  метод for of() ;

// Конструкція for...of оголошує цикл, що перебирає ітерабельні об'єкти, як-от масиви і рядки. 
// Тіло циклу буде виконуватися для значення кожного елемента.
// Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// for (const variable of iterable) {
//   // тіло циклу
// }

// variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
// iterable — колекція, яка містить ітерабельні (що можна порахувати) елементи, наприклад масив.
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

                                // Модуль 3 - Обєкти {}

// = { } - літерал обєкта

// ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday);
// console.log(today);
// console.log(tomorrow);
// console.log(meanTemperature);



// ================================= Перебираєм Обєкти 

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// Краще не використовувати for in бо він перебирирає не тільки свої свойстав обєкта а і унаслідовані.
// Не використовуєм for in, а замість того for Of
// Для цього користуємось конструктором object який має метод:‹

// // Object.keys(feedback);  - повертає масив ключів
// // Object.values(feedback); - повертає масив значень

// const keys = Object.keys(feedback);
// console.log(keys);

// // В подальшоу перебираємо через for of

//     for (const key of kays) {
//         console.log(key);
//         console.log(feedback[key]);

//         totalFeedback += feedback[key];
//     }

// console.log("totalFeedback:", totalFeedback);


// =====================================...rest - оператор

// rest: збирання всіх аргументів функції
// Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію.
// Синтаксично - це близнюк операції розподілу, але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині 
// операції присвоювання, а збирання - коли ... знаходиться в її лівій частині.

// ===================================== Callback 

// Функції не відрізняються від чисел, рядків або масивів - це просто спеціальний тип даних
// (об'єкт вищого порядку), значення, яке можна зберігати у змінній або передавати 
// у якості аргументу в іншу функцію.

// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }
// registerGuest("Манго", greet);

// Інлайн колбеки

// Якщо колбек - функція - маленька, і потрібна тільки для передачі аргументом, її можна 
// оголосити безпосередньо на момент виклику функції, в яку передаємо колбек.Така функція 
// буде доступна тільки у якості значення параметра і більше ніде в коді.

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// Декілька колбеків

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }
// processCall("Манго");

// Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки 
// onAvailable і onNotAvailable, і викликала їх за умовою.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

                                // Модуль 4 - Перебираючі методи масиву


// HOF - Hight order function (функции высшего порядка)
// функция высшего порядка может принимать как параметр другую ф-цию и(или) возвращать другую функцию

// =======================    [].forEach() - нічого не вертає, тільки пербирає

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// friends.forEach(function (elem) {
//     console.log(elem.id, elem.name);
// });


// friends.forEach(function (friend) {
//     console.log(friend.id, friend.name);
// });
//====
// Best practice

// friends.forEach(({ id, name }) => {
//     console.log(id, name);
// });

// friends.forEach((item) => {
//     const { id, name } = item;
//     console.log(id, name);
// });


// =======================   [].map() - returns new arr (масив)


// [].map((elem, idx, arr)=>{})

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// const newArr = numbers.map((num, idx, arr) => {
//     return num * 10;
// });
// console.log(newArr);
// console.log(newArr === numbers);

// копія масиву через Map - юзаєм спред оператор ...

// let numbers = [10, 20, 30, 40, 50];
// const newArr = numbers.map((num) => {
//     return num;
// });
// console.log(newArr);

// юзаєм шорт хет синтаксис - короткий ретурн

// let numbers = [10, 20, 30, 40, 50];
// const newArr = numbers.map((num) => num);
// console.log(newArr);

// ===== масиви через map

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// const friendBudget = friends.map((friend) => {
//     return friend.budget;
// });
// console.log(friendBudget);

// Диструктуризуємо наш код на стрелочну функцію та коротким ретурном

// const friendBudget = friends.map(({budget}) => budget);
// console.log(friendBudget);

// Додаємо всім друзям премію

// const bonus = friends.map((friend) => {
//     return friend.budget + friend.budget * 0.1;
// });
// console.log(bonus);

// Додаємо премію тільки однову другу

// const bonusForUser = "Sara";
// const friendsArr = friends.map((friend) => {
//     if (bonusForUser === friend.name) {
//         return {
//             ...friend,
//             budget: friend.budget + 500,
//         }
//     }
//     return friend;
// });
// console.log(friendsArr);

// =======================   [].filter()

// Фільтрує по умові, якщо нічого не знаходить то вертає пустий масив

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// фільтруєм тих у кого isComplete - true

// const done = friends.filter((friend) => {
//     return friend.isComplete
// });
// console.log(done);

// У кого зарплата вище 1000

// const users = friends.filter((friend) => {
//     return friend.budget < 1000;
// });
// console.log(users);

// Всі крім Sara

// const userToFind = "Sara"
// const users = friends.filter((friend) => {
//     return friend.name !== userToFind;
// })
// console.log(users);

// Тільки Sara

// const userToFind = "Sara";
// const users = friends.filter((friend) => {
//     return friend.name === userToFind;
// });
// console.log(users);

// =======================   [].find()

// Знаходить тільки один елемент, якщо 2 однакові назви то виводить першу яку знайшов
// Если не находит, то возвращает undefined

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 18, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
//     { id: 4, name: "Sara", age: 25, budget: 2000, isComplete: false },
// ];

// const nameToFind = "Sara";
// const user = friends.find((friend) => {
//     return friend.name === nameToFind;
// });

// console.log(user);
