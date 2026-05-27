// Lesson 3 Data: Functions (Methods) in C#
const quizData = [
    {
        question: "Как называются функции в C#?",
        options: ["Функции", "Процедуры", "Методы", "Подпрограммы"],
        correct: 2,
        explanation: "В C# функции называются <code>методами</code>. Метод — это именованный блок кода, который можно вызывать по имени."
    },
    {
        question: "Что означает ключевое слово <code>void</code> в объявлении метода?",
        options: [
            "Метод принимает любой тип",
            "Метод ничего не возвращает",
            "Метод пустой",
            "Метод вызывает ошибку"
        ],
        correct: 1,
        explanation: "<code>void</code> указывает, что метод не возвращает значение. Он просто выполняет действия (например, выводит текст) без <code>return значение;</code>."
    },
    {
        question: "Какой метод объявлен правильно?",
        options: [
            "int SayHello() { Console.WriteLine(\"Hi\"); }",
            "void SayHello() { Console.WriteLine(\"Hi\"); }",
            "SayHello() void { Console.WriteLine(\"Hi\"); }",
            "function SayHello() { Console.WriteLine(\"Hi\"); }"
        ],
        correct: 1,
        explanation: "Правильный синтаксис: <code>тип_возврата Имя(параметры) { тело }</code>. Вариант B верен: <code>void</code> — не возвращает значение, <code>SayHello</code> — имя метода."
    },
    {
        question: "Что выведет данный код?",
        code: "static int Add(int a, int b)\n{\n    return a + b;\n}\n\nConsole.WriteLine(Add(3, 7));",
        options: ["37", "10", "a + b", "Ошибка"],
        correct: 1,
        explanation: "Метод <code>Add</code> принимает два числа и возвращает их сумму: <code>3 + 7 = 10</code>."
    },
    {
        question: "Что делает оператор <code>return</code>?",
        options: [
            "Перезапускает метод",
            "Завершает метод и возвращает значение вызывающему коду",
            "Выводит значение в консоль",
            "Объявляет переменную"
        ],
        correct: 1,
        explanation: "<code>return</code> немедленно завершает выполнение метода и передаёт указанное значение обратно в то место, откуда метод был вызван."
    },
    {
        question: "Что такое параметры метода?",
        options: [
            "Значения, которые метод возвращает",
            "Переменные, которые метод принимает при вызове",
            "Локальные константы",
            "Глобальные переменные"
        ],
        correct: 1,
        explanation: "Параметры — это переменные, объявленные в скобках метода. При вызове в них передаются аргументы: <code>Add(3, 7)</code> — 3 и 7 являются аргументами."
    },
    {
        question: "Что произойдёт при компиляции?",
        code: "static int Square(int x)\n{\n    Console.WriteLine(x * x);\n}",
        options: [
            "Выведет квадрат числа",
            "Ошибка: метод с типом int должен содержать return",
            "Ошибка: неверное имя метода",
            "Всё скомпилируется без ошибок"
        ],
        correct: 1,
        explanation: "Метод объявлен с типом возврата <code>int</code>, но не содержит <code>return</code>. Нужно либо добавить <code>return x * x;</code>, либо сменить тип на <code>void</code>."
    },
    {
        question: "Что выведет данный код?",
        code: "static string Greet(string name)\n{\n    return $\"Привет, {name}!\";\n}\n\nConsole.WriteLine(Greet(\"Анна\"));",
        options: ["name", "Привет, Анна!", "Привет, name!", "Ошибка"],
        correct: 1,
        explanation: "Метод <code>Greet</code> принимает строку <code>\"Анна\"</code> и возвращает интерполированную строку <code>\"Привет, Анна!\"</code>."
    },
    {
        question: "Можно ли создать два метода с одинаковым именем?",
        options: [
            "Нет, имена должны быть уникальны",
            "Да, если у них разные параметры (перегрузка)",
            "Да, если они в разных строках",
            "Только если они static"
        ],
        correct: 1,
        explanation: "Перегрузка методов позволяет создавать несколько методов с одним именем, но разным числом или типом параметров. Компилятор выбирает нужный по аргументам."
    },
    {
        question: "Какой метод будет вызван?",
        code: "static int Sum(int a, int b) { return a + b; }\nstatic double Sum(double a, double b) { return a + b; }\n\nConsole.WriteLine(Sum(2.5, 3.5));",
        options: [
            "Sum(int, int)",
            "Sum(double, double)",
            "Ошибка — два метода с одним именем",
            "Вызовется случайный"
        ],
        correct: 1,
        explanation: "Аргументы <code>2.5</code> и <code>3.5</code> — это <code>double</code>, поэтому компилятор выберет перегрузку <code>Sum(double, double)</code>."
    },
    {
        question: "Что такое параметр по умолчанию?",
        code: "static void Log(string msg, int level = 1)\n{\n    Console.WriteLine($\"[{level}] {msg}\");\n}",
        options: [
            "Параметр, который нельзя изменить",
            "Параметр со значением, если аргумент не передан",
            "Первый параметр метода",
            "Ошибка — так нельзя делать"
        ],
        correct: 1,
        explanation: "Параметр по умолчанию имеет значение, которое используется, если аргумент не передан. <code>Log(\"Ошибка\")</code> — level будет 1. <code>Log(\"Ошибка\", 3)</code> — level будет 3."
    },
    {
        question: "Что выведет данный код?",
        code: "static int Factorial(int n)\n{\n    if (n <= 1) return 1;\n    return n * Factorial(n - 1);\n}\n\nConsole.WriteLine(Factorial(5));",
        options: ["5", "15", "120", "Ошибка"],
        correct: 2,
        explanation: "Это рекурсивный метод: 5! = 5 × 4 × 3 × 2 × 1 = 120. Метод вызывает сам себя, пока <code>n</code> не станет <= 1."
    },
    {
        question: "Что такое рекурсия?",
        options: [
            "Вызов метода из другого класса",
            "Когда метод вызывает сам себя",
            "Цикл внутри метода",
            "Перегрузка метода"
        ],
        correct: 1,
        explanation: "Рекурсия — это когда метод вызывает сам себя. Обязательно нужен базовый случай (условие выхода), иначе будет бесконечная рекурсия и StackOverflowException."
    },
    {
        question: "Что выведет данный код?",
        code: "static void Change(int x)\n{\n    x = 100;\n}\n\nint a = 5;\nChange(a);\nConsole.WriteLine(a);",
        options: ["100", "5", "0", "Ошибка"],
        correct: 1,
        explanation: "В C# числовые типы передаются по значению — метод получает копию. Изменение копии не влияет на оригинал: <code>a</code> остаётся 5."
    },
    {
        question: "Какое ключевое слово позволяет передать переменную по ссылке?",
        options: ["out", "ref", "var", "link"],
        correct: 1,
        explanation: "<code>ref</code> передаёт переменную по ссылке — метод работает с оригиналом, а не копией. Переменная должна быть инициализирована до вызова."
    },
    {
        question: "Чем <code>out</code> отличается от <code>ref</code>?",
        options: [
            "Ничем не отличается",
            "out-переменная не обязана быть инициализирована до вызова",
            "out работает только с числами",
            "ref быстрее, чем out"
        ],
        correct: 1,
        explanation: "<code>out</code> не требует инициализации переменной до передачи, но метод обязан присвоить ей значение. <code>ref</code> требует инициализации заранее."
    },
    {
        question: "Что выведет данный код?",
        code: "static void Double(ref int x)\n{\n    x *= 2;\n}\n\nint val = 5;\nDouble(ref val);\nConsole.WriteLine(val);",
        options: ["5", "10", "0", "Ошибка"],
        correct: 1,
        explanation: "Ключевое слово <code>ref</code> передаёт переменную по ссылке. Метод изменяет оригинал: <code>5 * 2 = 10</code>."
    },
    {
        question: "Что означает <code>static</code> перед методом?",
        options: [
            "Метод нельзя вызвать",
            "Метод принадлежит классу, а не экземпляру объекта",
            "Метод выполняется только один раз",
            "Метод не может иметь параметры"
        ],
        correct: 1,
        explanation: "<code>static</code> означает, что метод принадлежит самому классу и может быть вызван без создания объекта: <code>ClassName.Method()</code>."
    },
    {
        question: "Где доступна переменная, объявленная внутри метода?",
        options: [
            "Во всей программе",
            "Только внутри этого метода",
            "Во всех методах класса",
            "В любом классе"
        ],
        correct: 1,
        explanation: "Переменная, объявленная внутри метода, является локальной — она существует и доступна только внутри этого метода. После выхода из метода она уничтожается."
    },
    {
        question: "Как записать метод с помощью сокращённого синтаксиса (expression-bodied)?",
        code: "// Обычный вид:\nstatic int Square(int x)\n{\n    return x * x;\n}",
        options: [
            "static int Square(int x) -> x * x;",
            "static int Square(int x) => x * x;",
            "static int Square(int x) : x * x;",
            "Так нельзя сделать"
        ],
        correct: 1,
        explanation: "Expression-bodied метод записывается с <code>=></code>: <code>static int Square(int x) => x * x;</code>. Это сокращение для методов с одним выражением."
    },
    {
        question: "Что выведет данный код?",
        code: "static int Max(int a, int b) => a > b ? a : b;\n\nConsole.WriteLine(Max(15, 8));",
        options: ["8", "15", "true", "Ошибка"],
        correct: 1,
        explanation: "Expression-bodied метод с тернарным оператором: <code>15 > 8</code> — true, возвращается <code>15</code>."
    },
    {
        question: "Что такое <code>params</code>?",
        code: "static int Sum(params int[] numbers)\n{\n    int total = 0;\n    foreach (int n in numbers) total += n;\n    return total;\n}",
        options: [
            "Обязательный массив параметров",
            "Позволяет передать переменное число аргументов",
            "Определяет максимум параметров",
            "Создаёт глобальную переменную"
        ],
        correct: 1,
        explanation: "<code>params</code> позволяет передать произвольное число аргументов: <code>Sum(1, 2, 3)</code> или <code>Sum(1, 2, 3, 4, 5)</code>. Внутри метода они собираются в массив."
    },
    {
        question: "Что выведет данный код?",
        code: "static int Sum(params int[] nums)\n{\n    int s = 0;\n    foreach (int n in nums) s += n;\n    return s;\n}\n\nConsole.WriteLine(Sum(1, 2, 3, 4));",
        options: ["1234", "10", "4", "Ошибка"],
        correct: 1,
        explanation: "Метод суммирует все переданные числа: <code>1 + 2 + 3 + 4 = 10</code>."
    },
    {
        question: "Может ли метод вызывать другой метод?",
        options: [
            "Нет, методы независимы",
            "Да, метод может вызывать любой доступный метод",
            "Только если оба static",
            "Только через return"
        ],
        correct: 1,
        explanation: "Методы могут свободно вызывать друг друга. Это основа декомпозиции — разбиения задачи на подзадачи."
    },
    {
        question: "Что выведет данный код?",
        code: "static bool IsEven(int n) => n % 2 == 0;\nstatic string Check(int n) => IsEven(n) ? \"чётное\" : \"нечётное\";\n\nConsole.WriteLine(Check(7));",
        options: ["чётное", "нечётное", "true", "Ошибка"],
        correct: 1,
        explanation: "<code>Check</code> вызывает <code>IsEven(7)</code>: 7 % 2 = 1, не равно 0 — <code>false</code>. Тернарный оператор возвращает <code>\"нечётное\"</code>."
    },
    {
        question: "В каком порядке должны идти параметры с значениями по умолчанию?",
        options: [
            "В любом порядке",
            "Обязательные сначала, необязательные после",
            "Необязательные сначала",
            "Порядок не важен"
        ],
        correct: 1,
        explanation: "Параметры со значениями по умолчанию должны идти после обязательных: <code>void F(int x, int y = 0)</code> — верно. <code>void F(int y = 0, int x)</code> — ошибка."
    },
    {
        question: "Что будет, если рекурсивный метод не имеет базового случая?",
        options: [
            "Вернёт 0",
            "StackOverflowException — переполнение стека",
            "Компилятор исправит ошибку",
            "Метод просто не выполнится"
        ],
        correct: 1,
        explanation: "Без базового случая метод будет бесконечно вызывать сам себя, пока не заполнится стек вызовов — произойдёт <code>StackOverflowException</code>."
    },
    {
        question: "Что выведет данный код?",
        code: "static int Count(int n)\n{\n    if (n <= 0) return 0;\n    return 1 + Count(n - 1);\n}\n\nConsole.WriteLine(Count(4));",
        options: ["0", "3", "4", "10"],
        correct: 2,
        explanation: "Count(4) = 1 + Count(3) = 1 + 1 + Count(2) = 1 + 1 + 1 + Count(1) = 1 + 1 + 1 + 1 + Count(0) = 4. Метод считает, сколько раз можно вычесть 1 до нуля."
    },
    {
        question: "Как вернуть несколько значений из метода?",
        options: [
            "Использовать несколько return подряд",
            "Использовать кортеж (tuple) или out-параметры",
            "Это невозможно в C#",
            "Записать значения через запятую после return"
        ],
        correct: 1,
        explanation: "Можно вернуть кортеж: <code>static (int, int) Divide(int a, int b) => (a / b, a % b);</code> или использовать <code>out</code>-параметры."
    }
];

const practiceData = [
    {
        title: "Функция приветствия",
        description: "Напиши метод Greet, который принимает имя (string) и возвращает строку приветствия. Вызови его и выведи результат.",
        points: 3,
        difficulty: "Лёгкая",
        example: {
            type: "output",
            content: "Привет, Максим! Рад тебя видеть!"
        }
    },
    {
        title: "Возведение в степень",
        description: "Напиши метод Power, который принимает основание (int) и показатель степени (int) и возвращает результат возведения в степень. Реализуй через цикл, без Math.Pow.",
        points: 5,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "// Вызов:\nConsole.WriteLine(Power(2, 10));\nConsole.WriteLine(Power(5, 3));",
            output: "1024\n125"
        }
    },
    {
        title: "Проверка простого числа",
        description: "Напиши метод IsPrime, который принимает число и возвращает true, если оно простое, и false — если нет. Выведи результат для нескольких чисел.",
        points: 7,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "// Вызов:\nConsole.WriteLine(IsPrime(7));\nConsole.WriteLine(IsPrime(12));\nConsole.WriteLine(IsPrime(23));",
            output: "True\nFalse\nTrue"
        }
    },
    {
        title: "Перегрузка метода Area",
        description: "Создай два перегруженных метода Area: один принимает радиус круга (double), другой — ширину и высоту прямоугольника (double, double). Оба возвращают площадь.",
        points: 5,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "// Вызов:\nConsole.WriteLine(Area(5.0));    // круг\nConsole.WriteLine(Area(4.0, 6.0)); // прямоугольник",
            output: "78.54\n24"
        }
    },
    {
        title: "Рекурсивный Фибоначчи",
        description: "Напиши рекурсивный метод Fibonacci, который возвращает n-е число Фибоначчи. Выведи первые 10 чисел последовательности (F(1) до F(10)).",
        points: 10,
        difficulty: "Сложная",
        example: {
            type: "output",
            content: "1 1 2 3 5 8 13 21 34 55"
        }
    }
];
