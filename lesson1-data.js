// Lesson 1 Data: Introduction to C# — Variables, Data Types, Console Output
const quizData = [
    {
        question: "Какой метод используется для вывода текста в консоль с переходом на новую строку?",
        options: [
            "Console.Print()",
            "Console.WriteLine()",
            "Console.Output()",
            "Console.Display()"
        ],
        correct: 1,
        explanation: "<code>Console.WriteLine()</code> выводит текст в консоль и автоматически переходит на новую строку. Это один из самых часто используемых методов в C#."
    },
    {
        question: "Чем отличается <code>Console.Write()</code> от <code>Console.WriteLine()</code>?",
        options: [
            "Ничем не отличается",
            "Write() выводит числа, а WriteLine() — текст",
            "Write() не переходит на новую строку, а WriteLine() — переходит",
            "Write() работает быстрее"
        ],
        correct: 2,
        explanation: "<code>Console.Write()</code> выводит текст и оставляет курсор на той же строке. <code>Console.WriteLine()</code> после вывода переводит курсор на следующую строку."
    },
    {
        question: "Какой тип данных используется для хранения целых чисел?",
        options: [
            "string",
            "double",
            "int",
            "bool"
        ],
        correct: 2,
        explanation: "<code>int</code> (от слова integer — целое число) хранит целые числа в диапазоне от -2 147 483 648 до 2 147 483 647."
    },
    {
        question: "Какой тип данных подходит для хранения дробных чисел?",
        options: [
            "int",
            "bool",
            "char",
            "double"
        ],
        correct: 3,
        explanation: "<code>double</code> хранит числа с плавающей точкой (дробные числа) с двойной точностью. Например: <code>double pi = 3.14;</code>"
    },
    {
        question: "Какой тип данных хранит значение «истина» или «ложь»?",
        code: "??? isActive = true;",
        options: [
            "string",
            "int",
            "char",
            "bool"
        ],
        correct: 3,
        explanation: "<code>bool</code> (от Boolean) может принимать только два значения: <code>true</code> (истина) или <code>false</code> (ложь)."
    },
    {
        question: "Что выведет данный код?",
        code: 'Console.WriteLine("Hello" + " " + "World");',
        options: [
            "Hello World",
            "HelloWorld",
            "Hello + World",
            "Ошибка компиляции"
        ],
        correct: 0,
        explanation: "Оператор <code>+</code> при работе со строками выполняет их объединение (конкатенацию). Результат: <code>Hello World</code> — три строки склеились в одну."
    },
    {
        question: "Как правильно объявить строковую переменную?",
        options: [
            "int name = \"Алексей\";",
            "string name = \"Алексей\";",
            "char name = \"Алексей\";",
            "String name = 'Алексей';"
        ],
        correct: 1,
        explanation: "Строки в C# объявляются с типом <code>string</code> и заключаются в двойные кавычки. Одинарные кавычки используются только для типа <code>char</code>."
    },
    {
        question: "Какой тип данных хранит один символ?",
        options: [
            "string",
            "symbol",
            "char",
            "letter"
        ],
        correct: 2,
        explanation: "<code>char</code> (от character) хранит один символ Unicode и записывается в одинарных кавычках: <code>char letter = 'A';</code>"
    },
    {
        question: "Что выведет данный код?",
        code: "int a = 10;\nint b = 3;\nConsole.WriteLine(a / b);",
        options: [
            "3.33",
            "3",
            "3.333333",
            "Ошибка"
        ],
        correct: 1,
        explanation: "При делении двух целых чисел (<code>int</code>) результат тоже будет целым — дробная часть отбрасывается. 10 / 3 = 3 (а не 3.33)."
    },
    {
        question: "Как правильно записать интерполяцию строк?",
        code: "string name = \"Мир\";\nConsole.WriteLine(???);",
        options: [
            "\"Привет, {name}!\"",
            "$\"Привет, {name}!\"",
            "\"Привет, \" + {name} + \"!\"",
            "@\"Привет, {name}!\""
        ],
        correct: 1,
        explanation: "Интерполяция строк начинается с символа <code>$</code> перед кавычками. Внутри фигурных скобок указывается выражение или переменная: <code>$\"Привет, {name}!\"</code>"
    },
    {
        question: "Какое ключевое слово используется для объявления константы?",
        options: [
            "static",
            "readonly",
            "const",
            "final"
        ],
        correct: 2,
        explanation: "<code>const</code> объявляет константу — значение, которое нельзя изменить после инициализации. Например: <code>const double Pi = 3.14159;</code>"
    },
    {
        question: "Что произойдёт при выполнении этого кода?",
        code: "int x = 5;\nx = x + 3;\nConsole.WriteLine(x);",
        options: [
            "5",
            "3",
            "8",
            "Ошибка"
        ],
        correct: 2,
        explanation: "Сначала <code>x</code> равен 5, затем к нему прибавляется 3: <code>x = 5 + 3 = 8</code>. В консоль выведется <code>8</code>."
    },
    {
        question: "Какой оператор используется для получения остатка от деления?",
        options: [
            "/",
            "%",
            "//",
            "mod"
        ],
        correct: 1,
        explanation: "Оператор <code>%</code> (модуль) возвращает остаток от деления. Например: <code>10 % 3 = 1</code>, потому что 10 = 3 × 3 + 1."
    },
    {
        question: "Что выведет данный код?",
        code: "Console.Write(\"Hello \");\nConsole.Write(\"World\");",
        options: [
            "Hello\nWorld",
            "Hello World",
            "HelloWorld",
            "Ошибка"
        ],
        correct: 1,
        explanation: "<code>Console.Write()</code> не переводит строку, поэтому второй вызов продолжит вывод на той же строке. Результат: <code>Hello World</code>."
    },
    {
        question: "Какой тип данных занимает меньше всего памяти для хранения целого числа?",
        options: [
            "long",
            "int",
            "short",
            "byte"
        ],
        correct: 3,
        explanation: "<code>byte</code> занимает всего 1 байт и хранит значения от 0 до 255. Для сравнения: <code>short</code> — 2 байта, <code>int</code> — 4 байта, <code>long</code> — 8 байт."
    },
    {
        question: "Что такое <code>var</code> в C#?",
        code: "var message = \"Привет\";",
        options: [
            "Отдельный тип данных",
            "Ключевое слово для неявного определения типа",
            "Переменная без типа",
            "Ошибка — так нельзя писать"
        ],
        correct: 1,
        explanation: "<code>var</code> позволяет компилятору автоматически определить тип переменной по присвоенному значению. В данном случае <code>message</code> будет иметь тип <code>string</code>."
    },
    {
        question: "Что выведет данный код?",
        code: "double a = 10.0;\nint b = 3;\nConsole.WriteLine(a / b);",
        options: [
            "3",
            "3.33",
            "3.3333333333333335",
            "Ошибка"
        ],
        correct: 2,
        explanation: "Если хотя бы один операнд — <code>double</code>, то деление выполняется с плавающей точкой. Результат: <code>3.3333333333333335</code> (double-точность)."
    },
    {
        question: "Какая строка кода вызовет ошибку?",
        options: [
            "int age = 25;",
            "string name = \"Иван\";",
            "int count = \"пять\";",
            "bool isReady = false;"
        ],
        correct: 2,
        explanation: "Строку <code>\"пять\"</code> нельзя присвоить переменной типа <code>int</code> — типы несовместимы. C# — строго типизированный язык."
    },
    {
        question: "Что делает символ <code>\\n</code> в строке?",
        code: "Console.WriteLine(\"Строка1\\nСтрока2\");",
        options: [
            "Выводит символ \\n",
            "Переводит курсор на новую строку",
            "Добавляет пробел",
            "Вызывает ошибку"
        ],
        correct: 1,
        explanation: "<code>\\n</code> — это escape-последовательность, которая означает перевод строки (new line). В результате текст будет на двух строках."
    },
    {
        question: "Что выведет данный код?",
        code: "int x = 7;\nint y = 2;\nConsole.WriteLine($\"{x} % {y} = {x % y}\");",
        options: [
            "7 % 2 = 3",
            "7 % 2 = 3.5",
            "7 % 2 = 1",
            "Ошибка"
        ],
        correct: 2,
        explanation: "Оператор <code>%</code> вычисляет остаток от деления: 7 / 2 = 3, остаток 1. Интерполяция строк подставляет значения, результат: <code>7 % 2 = 1</code>."
    },
    {
        question: "Какое имя переменной допустимо в C#?",
        options: [
            "2name",
            "my-var",
            "_count",
            "class"
        ],
        correct: 2,
        explanation: "Имя переменной может начинаться с буквы или символа <code>_</code>. Нельзя начинать с цифры, использовать дефис или зарезервированные слова (<code>class</code>, <code>int</code> и т.д.)."
    },
    {
        question: "Что выведет данный код?",
        code: "int a = 5;\nint b = 3;\nConsole.WriteLine(\"Сумма: \" + a + b);",
        options: [
            "Сумма: 8",
            "Сумма: 53",
            "Ошибка",
            "Сумма: a + b"
        ],
        correct: 1,
        explanation: "Оператор <code>+</code> работает слева направо. Сначала строка склеивается с <code>a</code> (получается <code>\"Сумма: 5\"</code>), затем с <code>b</code> — итого <code>\"Сумма: 53\"</code>. Для арифметики нужны скобки: <code>(a + b)</code>."
    },
    {
        question: "Как преобразовать строку <code>\"42\"</code> в число?",
        options: [
            "(int)\"42\"",
            "int.Parse(\"42\")",
            "\"42\".ToInt()",
            "Integer.Parse(\"42\")"
        ],
        correct: 1,
        explanation: "<code>int.Parse()</code> преобразует строку в целое число. Также можно использовать <code>Convert.ToInt32(\"42\")</code>. Явное приведение <code>(int)</code> со строкой не работает."
    },
    {
        question: "Какой результат выражения <code>2 + 3 * 4</code>?",
        options: [
            "20",
            "14",
            "24",
            "Ошибка"
        ],
        correct: 1,
        explanation: "Умножение выполняется раньше сложения (как в математике). Сначала <code>3 * 4 = 12</code>, затем <code>2 + 12 = 14</code>."
    },
    {
        question: "Как узнать длину строки?",
        code: "string text = \"Hello\";\nint len = ???;",
        options: [
            "text.Size()",
            "text.Length",
            "text.Count()",
            "len(text)"
        ],
        correct: 1,
        explanation: "Свойство <code>.Length</code> возвращает количество символов в строке. Для <code>\"Hello\"</code> длина равна 5. Обратите внимание: это свойство, а не метод — без скобок."
    },
    {
        question: "Чем отличается <code>float</code> от <code>double</code>?",
        options: [
            "float точнее, чем double",
            "float занимает 4 байта, double — 8 байт",
            "float хранит целые числа",
            "Ничем не отличаются"
        ],
        correct: 1,
        explanation: "<code>float</code> — 4 байта, точность ~7 цифр. <code>double</code> — 8 байт, точность ~15 цифр. При объявлении float нужен суффикс <code>f</code>: <code>float x = 3.14f;</code>"
    },
    {
        question: "Что выведет данный код?",
        code: "int x = 10;\nx += 5;\nx -= 3;\nConsole.WriteLine(x);",
        options: [
            "10",
            "15",
            "12",
            "8"
        ],
        correct: 2,
        explanation: "<code>x += 5</code> — это сокращение для <code>x = x + 5</code> (x = 15). Затем <code>x -= 3</code> — это <code>x = x - 3</code> (x = 12). Результат: <code>12</code>."
    },
    {
        question: "Что возвращает <code>Console.ReadLine()</code>?",
        options: [
            "int",
            "char",
            "string",
            "bool"
        ],
        correct: 2,
        explanation: "<code>Console.ReadLine()</code> всегда возвращает <code>string</code> — строку, введённую пользователем. Для получения числа нужно преобразование: <code>int.Parse(Console.ReadLine())</code>."
    },
    {
        question: "Что делает <code>\\t</code> в строке?",
        code: "Console.WriteLine(\"Имя:\\tИван\");",
        options: [
            "Выводит символ \\t",
            "Добавляет табуляцию (отступ)",
            "Переносит строку",
            "Вызывает ошибку"
        ],
        correct: 1,
        explanation: "<code>\\t</code> — escape-последовательность табуляции. Она добавляет горизонтальный отступ. Результат: <code>Имя:    Иван</code> (с отступом)."
    },
    {
        question: "Как правильно объявить несколько переменных одного типа?",
        options: [
            "int a, b, c = 1, 2, 3;",
            "int a = 1; int b = 2; int c = 3;",
            "int a = 1, b = 2, c = 3;",
            "Оба варианта B и C верны"
        ],
        correct: 3,
        explanation: "Оба варианта верны. Можно объявлять каждую переменную отдельно (<code>int a = 1; int b = 2;</code>) или через запятую (<code>int a = 1, b = 2, c = 3;</code>). Вариант A — ошибка синтаксиса."
    }
];

const practiceData = [
    {
        title: "Приветствие",
        description: "Напиши программу, которая выводит в консоль приветствие с именем. Имя задано в переменной.",
        points: 3,
        difficulty: "Лёгкая",
        example: {
            type: "output",
            content: "Привет, Александр! Добро пожаловать в мир C#!"
        }
    },
    {
        title: "Калькулятор площади",
        description: "Напиши программу, которая вычисляет площадь прямоугольника. Ширина и высота заданы в переменных. Результат выведи в формате, показанном ниже.",
        points: 5,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "// Входные данные (переменные):\nint width = 8;\nint height = 5;",
            output: "Площадь прямоугольника: 8 × 5 = 40"
        }
    },
    {
        title: "Обмен валют",
        description: "Дана сумма в рублях и курс доллара. Напиши программу, которая переводит рубли в доллары и выводит результат с двумя знаками после запятой.",
        points: 7,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "// Входные данные (переменные):\ndouble rubles = 7500;\ndouble rate = 92.5;",
            output: "7500 руб. = 81.08 $"
        }
    },
    {
        title: "Информация о себе",
        description: "Создай переменные: имя (string), возраст (int), рост (double), студент ли (bool). Выведи всю информацию в удобном формате, каждое поле — на отдельной строке.",
        points: 5,
        difficulty: "Средняя",
        example: {
            type: "output",
            content: "=== Карточка ===\nИмя: Иван\nВозраст: 17 лет\nРост: 175.5 см\nСтудент: Да"
        }
    },
    {
        title: "Разбиение времени",
        description: "Дано количество секунд. Напиши программу, которая переводит его в часы, минуты и оставшиеся секунды. Используй целочисленное деление и остаток от деления.",
        points: 10,
        difficulty: "Сложная",
        example: {
            type: "io",
            code: "// Входные данные (переменная):\nint totalSeconds = 3725;",
            output: "3725 секунд = 1 ч. 2 мин. 5 сек."
        }
    }
];
