// Задание 1. Найти сумму всех элементов массива

let numbers = [1, 2, 3, 4, 5]; // Пример массива

function sumArray(arr) {
    let sum = 0; // Инициализируем переменную для суммы

    // Проходим по всем элементам массива с помощью цикла for
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Добавляем текущий элемент к сумме
    }

    return sum; // Возвращаем итоговую сумму
}

console.log(sumArray(numbers)); // Пример вывода: 15


// Задание 2. Найти максимальный элемент массива

let numbers = [3, 1, 4, 1, 5, 9]; // Пример массива

function findMax(arr) {
    let max = arr[0]; // Инициализируем max первым элементом массива

    // Проходим по всем элементам массива с помощью цикла for
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) { // Если текущий элемент больше max
            max = arr[i]; // Обновляем max
        }
    }

    return max; // Возвращаем максимальный элемент
}

console.log(findMax(numbers)); // Пример вывода: 9


// Задание 3. Фильтрация массива по условию

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Пример массива

function filterArray(arr) {
    let evenNumbers = []; // Создаем новый массив для четных чисел

    // Проходим по всем элементам массива с помощью цикла for
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { // Проверяем, является ли число четным
            evenNumbers.push(arr[i]); // Добавляем четное число в новый массив
        }
    }

    return evenNumbers; // Возвращаем массив четных чисел
}

console.log(filterArray(numbers)); // Пример вывода: [2, 4, 6, 8]


// Задание 4: Реализация метода массива "map" через цикл

let numbers = [1, 2, 3, 4, 5]; // Пример массива

// Пример функции-преобразователя
function multiplyByTwo(num) {
    return num * 2;
}

// Функция mapArray
function mapArray(arr, callback) {
    let result = []; // Создаем новый массив для результатов

    // Проходим по всем элементам массива с помощью цикла for
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i])); // Применяем функцию-преобразователь 
                                        // и добавляем результат в новый массив
    }

    return result; // Возвращаем новый массив
}

console.log(mapArray(numbers, multiplyByTwo)); // Пример вывода: [2, 4, 6, 8, 10]


// Задание 5. Реализация метода массива "forEach" через цикл

let numbers = [1, 2, 3, 4, 5]; // Пример массива

// Пример функции для вывода
function printElement(element) {
    console.log(element);
}

// Функция forEachArray
function forEachArray(arr, callback) {
    // Проходим по всем элементам массива с помощью цикла for
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]); // Применяем функцию к текущему элементу
    }
}

// Пример использования
forEachArray(numbers, printElement); // Пример вывода: 1 2 3 4 5 (по одному числу на строку)


// Задание 6. Развернуть массив

let numbers = [1, 2, 3, 4, 5]; // Пример массива

function reverseArray(arr) {
    let reversed = []; // Создаем новый массив для развернутой версии

    // Проходим по массиву в обратном порядке с помощью цикла for
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); // Добавляем элементы в новый массив
    }

    return reversed; // Возвращаем развернутый массив
}

console.log(reverseArray(numbers)); // Пример вывода: [5, 4, 3, 2, 1]
