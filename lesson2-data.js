// Lesson 2 Data: Conditions, Loops, Logical Operators
const quizData = [
    {
        question: "Какая конструкция используется для проверки условия в C#?",
        options: ["for", "if", "switch", "while"],
        correct: 1,
        explanation: "Конструкция <code>if</code> проверяет условие и выполняет блок кода, если условие истинно (<code>true</code>)."
    },
    {
        question: "Что выведет данный код?",
        code: "int x = 10;\nif (x > 5)\n    Console.WriteLine(\"Больше\");\nelse\n    Console.WriteLine(\"Меньше\");",
        options: ["Меньше", "Больше", "Ошибка", "Ничего"],
        correct: 1,
        explanation: "Условие <code>x > 5</code> истинно (10 > 5), поэтому выполняется ветка <code>if</code> и выводится <code>\"Больше\"</code>."
    },
    {
        question: "Какой оператор означает «равно» при сравнении?",
        options: ["=", "==", "===", "equals"],
        correct: 1,
        explanation: "<code>==</code> — оператор сравнения (проверяет равенство). <code>=</code> — оператор присваивания (устанавливает значение). Не путай их!"
    },
    {
        question: "Что означает оператор <code>!=</code>?",
        options: ["Равно", "Не равно", "Больше", "Присвоить"],
        correct: 1,
        explanation: "<code>!=</code> означает «не равно». Например, <code>5 != 3</code> вернёт <code>true</code>, а <code>5 != 5</code> вернёт <code>false</code>."
    },
    {
        question: "Что делает оператор <code>&&</code>?",
        options: ["Логическое ИЛИ", "Логическое И", "Логическое НЕ", "Побитовое И"],
        correct: 1,
        explanation: "<code>&&</code> — логическое И (AND). Результат <code>true</code> только когда оба условия истинны: <code>true && true = true</code>, всё остальное — <code>false</code>."
    },
    {
        question: "Что делает оператор <code>||</code>?",
        options: ["Логическое И", "Логическое ИЛИ", "Логическое НЕ", "Конкатенация"],
        correct: 1,
        explanation: "<code>||</code> — логическое ИЛИ (OR). Результат <code>true</code>, если хотя бы одно условие истинно."
    },
    {
        question: "Что выведет данный код?",
        code: "int age = 20;\nif (age >= 18 && age <= 65)\n    Console.WriteLine(\"Рабочий возраст\");\nelse\n    Console.WriteLine(\"Не рабочий возраст\");",
        options: ["Не рабочий возраст", "Рабочий возраст", "Ошибка", "Ничего"],
        correct: 1,
        explanation: "Оба условия истинны: <code>20 >= 18</code> и <code>20 <= 65</code>. Оператор <code>&&</code> возвращает <code>true</code>, выполняется ветка <code>if</code>."
    },
    {
        question: "Что делает оператор <code>!</code>?",
        code: "bool isReady = true;\nConsole.WriteLine(!isReady);",
        options: ["true", "false", "Ошибка", "!true"],
        correct: 1,
        explanation: "<code>!</code> — логическое НЕ (NOT). Инвертирует значение: <code>!true = false</code>, <code>!false = true</code>."
    },
    {
        question: "Как работает тернарный оператор?",
        code: "int x = 5;\nstring result = (x > 3) ? \"Да\" : \"Нет\";",
        options: ["result = \"Нет\"", "result = \"Да\"", "Ошибка компиляции", "result = \"x > 3\""],
        correct: 1,
        explanation: "Тернарный оператор: <code>условие ? значение_если_true : значение_если_false</code>. Так как <code>5 > 3</code> — истина, result = <code>\"Да\"</code>."
    },
    {
        question: "Для чего используется конструкция <code>else if</code>?",
        options: [
            "Для завершения программы",
            "Для проверки дополнительного условия, если предыдущее ложно",
            "Для создания цикла",
            "Для объявления переменной"
        ],
        correct: 1,
        explanation: "<code>else if</code> позволяет проверить дополнительное условие, если предыдущий <code>if</code> (или <code>else if</code>) был ложным. Это создаёт цепочку проверок."
    },
    {
        question: "Что выведет данный код?",
        code: "int score = 75;\nif (score >= 90)\n    Console.WriteLine(\"Отлично\");\nelse if (score >= 70)\n    Console.WriteLine(\"Хорошо\");\nelse\n    Console.WriteLine(\"Нужно стараться\");",
        options: ["Отлично", "Хорошо", "Нужно стараться", "Отлично и Хорошо"],
        correct: 1,
        explanation: "75 не >= 90, поэтому первый <code>if</code> пропущен. 75 >= 70 — истина, поэтому выводится <code>\"Хорошо\"</code>. Остальные ветки не проверяются."
    },
    {
        question: "Какая конструкция заменяет длинную цепочку <code>if-else if</code> при сравнении одной переменной?",
        options: ["for", "while", "switch", "do"],
        correct: 2,
        explanation: "<code>switch</code> удобен для сравнения одной переменной с несколькими значениями. Он делает код чище, чем длинная цепочка <code>if-else if</code>."
    },
    {
        question: "Что обязательно ставить в конце каждого <code>case</code> в <code>switch</code>?",
        options: ["continue;", "return;", "break;", "stop;"],
        correct: 2,
        explanation: "<code>break;</code> завершает выполнение текущего <code>case</code> и выходит из <code>switch</code>. Без него выполнение «провалится» в следующий case."
    },
    {
        question: "Для чего нужен блок <code>default</code> в <code>switch</code>?",
        options: [
            "Обязательный первый блок",
            "Выполняется, если ни один case не совпал",
            "Задаёт значение по умолчанию переменной",
            "Завершает программу"
        ],
        correct: 1,
        explanation: "<code>default</code> — аналог <code>else</code> для <code>switch</code>. Этот блок выполняется, если значение не совпало ни с одним <code>case</code>."
    },
    {
        question: "Какой цикл гарантированно выполнится хотя бы один раз?",
        options: ["for", "while", "do-while", "foreach"],
        correct: 2,
        explanation: "<code>do-while</code> сначала выполняет тело цикла, а потом проверяет условие. Поэтому тело выполнится минимум один раз, даже если условие ложно."
    },
    {
        question: "Что выведет данный код?",
        code: "for (int i = 0; i < 3; i++)\n{\n    Console.Write(i + \" \");\n}",
        options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
        correct: 1,
        explanation: "Цикл стартует с <code>i = 0</code>, выполняется пока <code>i < 3</code> (т.е. для i = 0, 1, 2). Итого выведется <code>0 1 2</code>."
    },
    {
        question: "Из каких трёх частей состоит цикл <code>for</code>?",
        options: [
            "условие, тело, конец",
            "инициализация, условие, итерация",
            "начало, середина, конец",
            "объявление, проверка, вывод"
        ],
        correct: 1,
        explanation: "<code>for (инициализация; условие; итерация)</code> — инициализация выполняется один раз, условие проверяется перед каждой итерацией, итерация выполняется после каждого прохода."
    },
    {
        question: "Что выведет данный код?",
        code: "int i = 5;\nwhile (i > 0)\n{\n    i -= 2;\n}\nConsole.WriteLine(i);",
        options: ["0", "1", "-1", "Бесконечный цикл"],
        correct: 2,
        explanation: "i = 5 → 3 → 1 → -1. Когда i = -1, условие <code>i > 0</code> ложно, цикл завершается. Выводится <code>-1</code>."
    },
    {
        question: "Что делает оператор <code>break</code> внутри цикла?",
        options: [
            "Пропускает текущую итерацию",
            "Полностью прерывает выполнение цикла",
            "Перезапускает цикл",
            "Вызывает ошибку"
        ],
        correct: 1,
        explanation: "<code>break</code> немедленно прекращает выполнение цикла и передаёт управление коду после цикла."
    },
    {
        question: "Что делает оператор <code>continue</code> внутри цикла?",
        options: [
            "Завершает цикл",
            "Пропускает оставшийся код и переходит к следующей итерации",
            "Продолжает выполнение после цикла",
            "Перезапускает цикл с начала"
        ],
        correct: 1,
        explanation: "<code>continue</code> пропускает оставшийся код в текущей итерации и сразу переходит к проверке условия следующей итерации."
    },
    {
        question: "Что выведет данный код?",
        code: "for (int i = 0; i < 5; i++)\n{\n    if (i == 3) break;\n    Console.Write(i + \" \");\n}",
        options: ["0 1 2 3 4", "0 1 2", "0 1 2 3", "3"],
        correct: 1,
        explanation: "Когда <code>i == 3</code>, срабатывает <code>break</code> и цикл прерывается. До этого успели вывестись 0, 1, 2."
    },
    {
        question: "Что выведет данный код?",
        code: "for (int i = 0; i < 5; i++)\n{\n    if (i == 2) continue;\n    Console.Write(i + \" \");\n}",
        options: ["0 1 2 3 4", "0 1 3 4", "2", "0 1"],
        correct: 1,
        explanation: "Когда <code>i == 2</code>, <code>continue</code> пропускает вывод и переходит к i = 3. Результат: <code>0 1 3 4</code> — число 2 пропущено."
    },
    {
        question: "Какой результат выражения <code>true || false && false</code>?",
        options: ["false", "true", "Ошибка", "Зависит от порядка"],
        correct: 1,
        explanation: "Оператор <code>&&</code> имеет более высокий приоритет, чем <code>||</code>. Сначала: <code>false && false = false</code>. Затем: <code>true || false = true</code>."
    },
    {
        question: "Что произойдёт при выполнении?",
        code: "int x = 0;\nwhile (true)\n{\n    x++;\n    if (x == 5) break;\n}\nConsole.WriteLine(x);",
        options: ["0", "4", "5", "Бесконечный цикл"],
        correct: 2,
        explanation: "Цикл <code>while (true)</code> бесконечный, но <code>break</code> при <code>x == 5</code> его прерывает. После выхода <code>x = 5</code>."
    },
    {
        question: "Что выведет данный код?",
        code: "for (int i = 10; i >= 0; i -= 3)\n{\n    Console.Write(i + \" \");\n}",
        options: ["10 7 4 1", "10 7 4 1 -2", "10 7 4", "Ошибка"],
        correct: 0,
        explanation: "i: 10 → 7 → 4 → 1 → -2. При i = -2 условие <code>i >= 0</code> ложно, цикл завершается. Выведется: <code>10 7 4 1</code>."
    },
    {
        question: "Какой оператор сравнения означает «больше или равно»?",
        options: ["=>", ">=", ">>", "=<"],
        correct: 1,
        explanation: "<code>>=</code> — оператор «больше или равно». <code>=></code> — это лямбда-оператор в C#, не путай!"
    },
    {
        question: "Что выведет данный код?",
        code: "int a = 5, b = 10;\nConsole.WriteLine(a > b ? a : b);",
        options: ["5", "10", "true", "Ошибка"],
        correct: 1,
        explanation: "Тернарный оператор: <code>5 > 10</code> — ложь, поэтому выбирается значение после <code>:</code>, то есть <code>b = 10</code>."
    },
    {
        question: "Сколько раз выполнится тело цикла?",
        code: "int i = 10;\ndo\n{\n    Console.WriteLine(i);\n    i++;\n} while (i < 10);",
        options: ["0 раз", "1 раз", "10 раз", "Бесконечно"],
        correct: 1,
        explanation: "В <code>do-while</code> тело выполняется до проверки условия. <code>i = 10</code>, тело выполнится 1 раз, затем <code>10 < 10</code> — ложь, цикл завершится."
    },
    {
        question: "Что выведет вложенный цикл?",
        code: "for (int i = 0; i < 2; i++)\n    for (int j = 0; j < 3; j++)\n        Console.Write(\"*\");\nConsole.WriteLine();\nConsole.Write(\"Конец\");",
        options: ["** Конец", "****** Конец", "***\\n*** Конец", "Ошибка"],
        correct: 1,
        explanation: "Внешний цикл выполняется 2 раза, внутренний — 3 раза за каждый проход внешнего. Итого 2 × 3 = 6 звёздочек: <code>******</code>, затем перенос строки и <code>Конец</code>."
    },
    {
        question: "Что выведет данный код?",
        code: "switch (3)\n{\n    case 1: Console.Write(\"A\"); break;\n    case 2: Console.Write(\"B\"); break;\n    case 3: Console.Write(\"C\"); break;\n    default: Console.Write(\"D\"); break;\n}",
        options: ["A", "B", "C", "D"],
        correct: 2,
        explanation: "Значение 3 совпадает с <code>case 3</code>, поэтому выводится <code>\"C\"</code>. После <code>break</code> выполнение выходит из switch."
    }
];

const practiceData = [
    {
        title: "Чётное или нечётное",
        description: "Дано число в переменной. Определи, чётное оно или нечётное, и выведи результат.",
        points: 3,
        difficulty: "Лёгкая",
        example: {
            type: "io",
            code: "int number = 7;",
            output: "7 — нечётное число"
        }
    },
    {
        title: "Максимум из трёх",
        description: "Даны три числа. Найди и выведи наибольшее из них. Используй условные конструкции (без Math.Max).",
        points: 5,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "int a = 15, b = 42, c = 8;",
            output: "Наибольшее число: 42"
        }
    },
    {
        title: "Таблица умножения",
        description: "Выведи таблицу умножения для заданного числа (от 1 до 10). Используй цикл.",
        points: 7,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "int n = 5;",
            output: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50"
        }
    },
    {
        title: "Сумма цифр числа",
        description: "Дано трёхзначное число. Найди сумму его цифр, используя операции деления и остатка от деления.",
        points: 5,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "int number = 482;",
            output: "Сумма цифр числа 482 = 14"
        }
    },
    {
        title: "FizzBuzz",
        description: "Выведи числа от 1 до 20. Если число делится на 3 — выведи «Fizz», на 5 — «Buzz», на 3 и 5 — «FizzBuzz». Иначе — само число.",
        points: 10,
        difficulty: "Сложная",
        example: {
            type: "output",
            content: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz"
        }
    }
];
