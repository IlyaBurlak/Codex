
/*
    Вопрос 1
    В чем разница между null и undefined?
*/

/*
    undefined( тип: undefined)- означает что:
    1. значение к переменной не присвоено,
    2. обращаемся к свойству объекта, которого не существует.
    3. функция не возвращает явного значения.

    null (тип: object) - используется для обозначения отсутствия значения
*/



/*
    Вопрос 2
    Почему вывод в консоль obj.someprop.x приводит к ошибке?
    const obj = {};
    console.log(obj.someprop.x);

    Ошибка происходит из-за того что мы пытаемся обратится к свойству 'x' у значения undefined так как у нас свойство someprop не определено.

*/


/*
    Вопрос 3
    Как проверить, является ли значение массивом?
*/

let Array = [1, 2, 3];
let notAnArray = 'это не массив';

console.log(Array.isArray(Array));  // true
console.log(Array.isArray(notAnArray)); // false

/*
    Вопрос 4
    Проверить, является ли целое число квадратом, не используя математические функции.
*/

function isSquare(num) {
    let i = 1;
    let square = 1;

    while (square <= num) {
        if (square === num) {
            return true;
        }
        i++;
        square = i * i;
    }

    return false;
}

console.log(isSquare(16)); // true
console.log(isSquare(15)); // false


/*
    Вопрос 5
    Написать функцию, которая принимает в качестве аргумента строку и возвращает значение true,
    если строка является палиндромом, и false, если это не так.
    При решении задачи необходимо учитывать пробелы и знаки препинания, регистр символов в заданной строке не учитывать.
*/

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-я']/g, '');
    const words = cleanedStr.split(/\s+/);

    return words.every(word => {
        return word === word.split('').reverse().join('');
    });
}

console.log(isPalindrome('А, роза упала на лапу Азора.')); //true
console.log(isPalindrome("A man, a plan, a canal: Panama!")); // true




/*
 Вопрос 6
 Напишите функцию, которая возвращает n-ую запись в последовательности Фибоначчи,
 где n — это число, которое вы передаёте в качестве аргумента функции.
 Числа Фибоначчи - элементы числовой последовательности, в которой первые два числа равны 0 и 1,
 а каждое последующее число равно сумме двух предыдущих чисел.

 Для проверки
 0 1 2 3 4 5 6  7   8   9   10 n
 0 1 1 2 3 5 8  13  21  34  55 F(n)
*/

function fibonacci(num){
    if(num < 2) {
        return num
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(10)) // 55




/*
 Вопрос 7
 Анализ кода
*/

const nums = [0, 39, 28, 34, 1, 3, 6, 8, 4, 72, 7];

nums.forEach(num => {
    setTimeout(() => {
        console.log(num);
    }, num);
});

/*
 1. Объявляется массив с числами.
 2. Для каждого числа из массива с помощью forEach создается setTimeout.
 3. Благодаря EventLoop мы получаем вывод чисел в отсортированном порядке так как у нас создается очередь из макрозадач
    и вывод чисел происходит с задержкой равным их номиналу.
*/



// Вопрос 8

// Для выполнения следующих заданий используйте файл "index.html" и стандартные методы JavaScript:
// 1) Выбрать элемент с атрибутом id="rootID" и добавить класс "rootClass"

const rootElement = document.getElementById("rootID")
rootElement.classList.add("rootClass")

// 2) Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента с атрибутом id="rootID" на первом уровне вложенности

const firstLevel = rootElement.querySelectorAll(':scope >.someClassName');
console.log(firstLevel) // 2


// 3) Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента с атрибутом id="rootID" на любом уровне вложенности

const allLevel = rootElement.querySelectorAll(".someClassName")
console.log(allLevel) // 4

// 4) Выбрать элементы с атрибутом class="someClassName" и атрибутом oid = "newDoc"

const elements = document.querySelectorAll('.someClassName[oid="newDoc"]');
console.log(elements)

// 5) Выбрать последний дочерний элемент с атрибутом class="someClassName" у элемента с атрибутом id="rootID" и заменить текст в параграфе (p) на "Последняя строка"

const lastElement = allLevel[allLevel.length - 1];
const paragraph = lastElement.querySelector('p');
paragraph.textContent = 'Последняя строка';
