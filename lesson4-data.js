// Lesson 3 Data: Inheritance, Type Casting, Hiding, Virtual and Override
const quizData = [
    {
        question: "Какой синтаксис используется для наследования класса в C#?",
        options: ["class Derived extends Base", "class Derived : Base", "class Derived inherits Base", "class Derived -> Base"],
        correct: 1,
        explanation: "В C# наследование обозначается двоеточием: <code>class Derived : Base</code>. Производный класс наследует все открытые и защищённые члены базового."
    },
    {
        question: "Сколько базовых классов может иметь один класс в C#?",
        options: ["Сколько угодно", "Только один", "Два", "Ни одного"],
        correct: 1,
        explanation: "В C# поддерживается только одиночное наследование классов — класс может иметь только один базовый класс. Множественное наследование реализуется через интерфейсы."
    },
    {
        question: "Какое ключевое слово позволяет членам базового класса быть доступными в производном, но скрытыми снаружи?",
        options: ["public", "private", "protected", "internal"],
        correct: 2,
        explanation: "<code>protected</code> — модификатор доступа, при котором член класса доступен внутри самого класса и во всех производных классах, но не доступен извне."
    },
    {
        question: "Как вызвать конструктор базового класса из конструктора производного?",
        options: ["super()", "base()", "this()", "parent()"],
        correct: 1,
        explanation: "В C# для вызова конструктора базового класса используется ключевое слово <code>base</code>. Пример: <code>public Derived(int x) : base(x) { }</code>."
    },
    {
        question: "В каком порядке вызываются конструкторы при создании объекта производного класса?",
        options: [
            "Сначала производного, потом базового",
            "Сначала базового, потом производного",
            "Одновременно",
            "Только производного"
        ],
        correct: 1,
        explanation: "Сначала всегда вызывается конструктор базового класса (через <code>base()</code>), а затем — конструктор производного. Это гарантирует, что базовая часть объекта инициализирована до работы с ней."
    },
    {
        question: "Что такое upcasting (восходящее преобразование)?",
        options: [
            "Преобразование объекта производного класса к типу базового",
            "Преобразование объекта базового класса к типу производного",
            "Создание нового объекта",
            "Удаление объекта"
        ],
        correct: 0,
        explanation: "Upcasting — это приведение ссылки производного класса к типу базового. Оно выполняется неявно и всегда безопасно, т.к. производный класс «является» базовым."
    },
    {
        question: "Что такое downcasting (нисходящее преобразование)?",
        options: [
            "Преобразование базового класса к производному",
            "Преобразование производного класса к базовому",
            "Удаление объекта",
            "Клонирование объекта"
        ],
        correct: 0,
        explanation: "Downcasting — приведение ссылки базового класса к типу производного. Требует явного приведения и может вызвать <code>InvalidCastException</code>, если реальный тип объекта не подходит."
    },
    {
        question: "Что выведет данный код?",
        code: "class Animal { }\nclass Dog : Animal { }\n\nAnimal a = new Dog();\nConsole.WriteLine(a is Dog);",
        options: ["true", "false", "Ошибка", "Animal"],
        correct: 0,
        explanation: "Оператор <code>is</code> проверяет, можно ли привести объект к указанному типу. Реальный тип объекта <code>a</code> — <code>Dog</code>, поэтому <code>a is Dog</code> вернёт <code>true</code>."
    },
    {
        question: "Что вернёт оператор <code>as</code>, если приведение типов невозможно?",
        options: ["Исключение", "0", "null", "false"],
        correct: 2,
        explanation: "Оператор <code>as</code> пытается привести объект к указанному ссылочному типу. Если приведение невозможно, он возвращает <code>null</code>, а не бросает исключение (в отличие от явного приведения)."
    },
    {
        question: "Что выведет данный код?",
        code: "class Animal { }\nclass Dog : Animal { }\nclass Cat : Animal { }\n\nAnimal a = new Dog();\nCat c = a as Cat;\nConsole.WriteLine(c == null);",
        options: ["true", "false", "Ошибка", "Dog"],
        correct: 0,
        explanation: "Объект <code>a</code> реально является <code>Dog</code>, а не <code>Cat</code>. Приведение <code>Dog → Cat</code> невозможно, поэтому <code>as</code> возвращает <code>null</code>, и <code>c == null</code> — истина."
    },
    {
        question: "Какое ключевое слово делает метод виртуальным (переопределяемым)?",
        options: ["override", "virtual", "abstract", "new"],
        correct: 1,
        explanation: "<code>virtual</code> помечает метод базового класса как переопределяемый. Без этого ключего слова производный класс не сможет использовать <code>override</code>."
    },
    {
        question: "Какое ключевое слово используется для переопределения виртуального метода?",
        options: ["virtual", "new", "override", "base"],
        correct: 2,
        explanation: "<code>override</code> используется в производном классе для переопределения виртуального (или абстрактного) метода базового класса. Это основа полиморфизма."
    },
    {
        question: "Что выведет данный код?",
        code: "class Base\n{\n    public virtual void Show() => Console.Write(\"Base\");\n}\nclass Derived : Base\n{\n    public override void Show() => Console.Write(\"Derived\");\n}\n\nBase obj = new Derived();\nobj.Show();",
        options: ["Base", "Derived", "BaseDerived", "Ошибка"],
        correct: 1,
        explanation: "Метод <code>Show</code> — виртуальный и переопределён. При вызове через ссылку базового типа <code>Base</code> CLR определяет реальный тип объекта (<code>Derived</code>) и вызывает переопределённую версию — это полиморфизм."
    },
    {
        question: "Что делает ключевое слово <code>new</code> при объявлении метода в производном классе?",
        options: [
            "Создаёт новый объект",
            "Переопределяет виртуальный метод",
            "Скрывает метод базового класса",
            "Делает метод статическим"
        ],
        correct: 2,
        explanation: "<code>new</code> скывает (а не переопределяет!) метод базового класса с тем же именем. Вызываемый метод зависит от типа ссылки, а не от реального типа объекта."
    },
    {
        question: "Что выведет данный код?",
        code: "class Base\n{\n    public void Show() => Console.Write(\"Base\");\n}\nclass Derived : Base\n{\n    public new void Show() => Console.Write(\"Derived\");\n}\n\nBase obj = new Derived();\nobj.Show();",
        options: ["Base", "Derived", "BaseDerived", "Ошибка"],
        correct: 0,
        explanation: "Метод <code>Show</code> не виртуальный, а в <code>Derived</code> он скрыт через <code>new</code>. Ссылка имеет тип <code>Base</code>, поэтому вызывается метод именно из <code>Base</code> — выводится <code>\"Base\"</code>."
    },
    {
        question: "В чём разница между <code>override</code> и <code>new</code>?",
        options: [
            "Ничем, это синонимы",
            "override — полиморфизм (по реальному типу), new — сокрытие (по типу ссылки)",
            "new — полиморфизм, override — сокрытие",
            "override для полей, new для методов"
        ],
        correct: 1,
        explanation: "<code>override</code> обеспечивает полиморфное поведение — метод выбирается по реальному типу объекта. <code>new</code> скывает метод — выбор идёт по типу ссылки. Это принципиально разное поведение!"
    },
    {
        question: "Можно ли переопределить (<code>override</code>) невиртуальный метод?",
        options: ["Да, всегда", "Нет, нельзя", "Только в статических классах", "Только с модификатором new"],
        correct: 1,
        explanation: "Переопределить можно только метод, помеченный как <code>virtual</code>, <code>abstract</code> или уже <code>override</code> в базовом классе. Для невиртуальных методов можно использовать только сокрытие через <code>new</code>."
    },
    {
        question: "Как вызвать реализацию метода базового класса из переопределённого метода?",
        options: ["super.Method()", "base.Method()", "parent.Method()", "this.Method()"],
        correct: 1,
        explanation: "Ключевое слово <code>base</code> даёт доступ к членам базового класса. <code>base.Method()</code> вызывает именно ту версию метода, которая определена в базовом классе."
    },
    {
        question: "Что выведет данный код?",
        code: "class Base\n{\n    public virtual void Print() => Console.Write(\"A\");\n}\nclass Derived : Base\n{\n    public override void Print()\n    {\n        base.Print();\n        Console.Write(\"B\");\n    }\n}\n\nnew Derived().Print();",
        options: ["A", "B", "AB", "BA"],
        correct: 2,
        explanation: "В переопределённом методе сначала вызывается <code>base.Print()</code> (выводит <code>\"A\"</code>), затем дописывается <code>\"B\"</code>. Итоговый вывод: <code>AB</code>."
    },
    {
        question: "Что делает ключевое слово <code>sealed</code> для метода?",
        options: [
            "Делает метод статическим",
            "Запрещает дальнейшее переопределение этого метода в производных классах",
            "Скрывает метод",
            "Делает метод приватным"
        ],
        correct: 1,
        explanation: "<code>sealed override</code> разрешает переопределить метод в текущем классе, но запрещает дальнейшее переопределение в классах-наследниках. Это «запечатывает» метод."
    },
    {
        question: "Что делает ключевое слово <code>sealed</code> для класса?",
        options: [
            "Делает класс абстрактным",
            "Запрещает наследование от этого класса",
            "Скрывает класс",
            "Делает класс статическим"
        ],
        correct: 1,
        explanation: "<code>sealed</code> класс нельзя использовать как базовый — от него нельзя наследоваться. Пример: <code>string</code> в C# — sealed-класс."
    },
    {
        question: "Что выведет данный код?",
        code: "class Animal\n{\n    public virtual void Speak() => Console.Write(\"...\");\n}\nclass Dog : Animal\n{\n    public override void Speak() => Console.Write(\"Гав\");\n}\nclass Puppy : Dog\n{\n    public sealed override void Speak() => Console.Write(\"Гав-гав\");\n}\nclass BabyPuppy : Puppy\n{\n    // public override void Speak() ... — можно ли?\n}\n\nAnimal a = new Puppy();\na.Speak();",
        options: ["...", "Гав", "Гав-гав", "Ошибка компиляции"],
        correct: 2,
        explanation: "Реальный тип объекта — <code>Puppy</code>. Метод <code>Speak</code> переопределён в <code>Puppy</code> и выводит <code>\"Гав-гав\"</code>. А вот в <code>BabyPuppy</code> переопределить <code>Speak</code> уже нельзя — он <code>sealed</code>."
    },
    {
        question: "Что такое полиморфизм?",
        options: [
            "Возможность класса иметь несколько конструкторов",
            "Возможность объектов с одинаковой спецификацией отвечать по-разному в зависимости от реального типа",
            "Скрытие данных класса",
            "Наследование от нескольких классов"
        ],
        correct: 1,
        explanation: "Полиморфизм — это когда один и тот же вызов метода (через базовую ссылку) приводит к разному поведению в зависимости от реального типа объекта. Реализуется через <code>virtual</code> и <code>override</code>."
    },
    {
        question: "Что выведет данный код?",
        code: "class Base\n{\n    public Base() => Console.Write(\"1\");\n}\nclass Derived : Base\n{\n    public Derived() => Console.Write(\"2\");\n}\nclass MoreDerived : Derived\n{\n    public MoreDerived() => Console.Write(\"3\");\n}\n\nnew MoreDerived();",
        options: ["321", "123", "132", "312"],
        correct: 1,
        explanation: "Конструкторы вызываются сверху вниз по иерархии: сначала <code>Base</code> (выводит <code>\"1\"</code>), затем <code>Derived</code> (<code>\"2\"</code>), и наконец <code>MoreDerived</code> (<code>\"3\"</code>). Итог: <code>123</code>."
    },
    {
        question: "Какое приведение типов выполняется неявно (без явного указания)?",
        options: [
            "От базового типа к производному",
            "От производного типа к базовому",
            "Между любыми классами",
            "Только между числовыми типами"
        ],
        correct: 1,
        explanation: "Upcasting (от производного к базовому) всегда безопасен и выполняется неявно: <code>Base b = new Derived();</code>. Обратное приведение требует явного указания: <code>Derived d = (Derived)b;</code>."
    },
    {
        question: "Что произойдёт при неудачном явном приведении <code>(Derived)baseObj</code>?",
        options: [
            "Вернётся null",
            "Вернётся значение по умолчанию",
            "Будет выброшено исключение InvalidCastException",
            "Ничего не произойдёт"
        ],
        correct: 2,
        explanation: "Явное приведение (<code>(Derived)baseObj</code>) при невозможности преобразования бросает исключение <code>InvalidCastException</code>. Безопасная альтернатива — оператор <code>as</code>, который вернёт <code>null</code>."
    },
    {
        question: "Что выведет данный код?",
        code: "class Base\n{\n    public virtual void M() => Console.Write(\"Base\");\n}\nclass A : Base\n{\n    public override void M() => Console.Write(\"A\");\n}\nclass B : A\n{\n    public new void M() => Console.Write(\"B\");\n}\n\nBase obj = new B();\nobj.M();",
        options: ["Base", "A", "B", "Ошибка"],
        correct: 1,
        explanation: "Метод <code>M</code> в классе <code>B</code> скрыт через <code>new</code>, а не переопределён. Ссылка имеет тип <code>Base</code>, и виртуальная цепочка остановилась на <code>A</code> (последний <code>override</code>). Поэтому вызывается <code>A.M()</code> — выводится <code>\"A\"</code>."
    },
    {
        question: "Можно ли обратиться к скрытому через <code>new</code> методу базового класса из производного?",
        options: [
            "Нет, он потерян навсегда",
            "Да, через приведение к базовому типу или через base",
            "Только через reflection",
            "Только в статическом контексте"
        ],
        correct: 1,
        explanation: "Скрытый метод никуда не исчезает. К нему можно обратиться через <code>base.Method()</code> внутри производного класса или приведя объект к типу базового класса: <code>((Base)obj).Method()</code>."
    },
    {
        question: "Что выведет данный код?",
        code: "object obj = \"Hello\";\nif (obj is string s)\n{\n    Console.WriteLine(s.Length);\n}",
        options: ["0", "5", "Hello", "Ошибка"],
        correct: 1,
        explanation: "Это pattern matching (сопоставление с образцом) в C#. Оператор <code>is string s</code> одновременно проверяет тип и объявляет переменную <code>s</code>. Так как объект — строка <code>\"Hello\"</code>, выводится её длина: <code>5</code>."
    }
];

const practiceData = [
    {
        title: "Иерархия «Фигура — Круг — Прямоугольник»",
        description: "Создай базовый абстрактный класс <code>Shape</code> с виртуальным методом <code>Area()</code>. Реализуй производные классы <code>Circle</code> (с радиусом) и <code>Rectangle</code> (с шириной и высотой), переопределив метод <code>Area()</code>. В методе <code>Main</code> создай массив <code>Shape[]</code> из разных фигур и выведи площади всех элементов — используя полиморфизм.",
        points: 8,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "Shape[] shapes =\n{\n    new Circle(5),\n    new Rectangle(4, 6),\n    new Circle(2)\n};\nforeach (var s in shapes)\n    Console.WriteLine(s.Area());",
            output: "78.54\n24\n12.57"
        }
    },
    {
        title: "Upcasting, Downcasting и операторы is/as",
        description: "Создай иерархию: <code>Employee</code> → <code>Manager</code> и <code>Developer</code>. Напиши метод, который принимает <code>Employee</code> и с помощью операторов <code>is</code> и <code>as</code> определяет реальный тип объекта и выводит специфичную для него информацию (например, у <code>Manager</code> есть свойство <code>Department</code>, у <code>Developer</code> — <code>ProgrammingLanguage</code>).",
        points: 7,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "Employee[] team =\n{\n    new Manager { Name = \"Аня\", Department = \"Sales\" },\n    new Developer { Name = \"Боря\", ProgrammingLanguage = \"C#\" },\n    new Manager { Name = \"Вика\", Department = \"HR\" }\n};\nforeach (var e in team)\n    PrintInfo(e);",
            output: "Аня — менеджер отдела Sales\nБоря — разработчик на C#\nВика — менеджер отдела HR"
        }
    },
    {
        title: "Override против New — почувствуй разницу",
        description: "Создай базовый класс <code>Logger</code> с методом <code>Log(string msg)</code>. Один метод сделай <code>virtual</code> и переопредели в наследнике через <code>override</code>. Второй метод сделай обычным и скрой в наследнике через <code>new</code>. В <code>Main</code> создай объект наследника, но присвой ссылке типа <code>Logger</code>. Вызови оба метода и проанализируй, почему результаты различаются.",
        points: 10,
        difficulty: "Сложная",
        example: {
            type: "io",
            code: "Logger logger = new FileLogger();\nlogger.LogVirtual(\"Привет\");\nlogger.LogHidden(\"Привет\");",
            output: "[VIRTUAL] FileLogger: Привет\n[BASE] Logger: Привет\n// Обрати внимание: virtual вызвал FileLogger,\n// а hidden — Logger, т.к. тип ссылки Logger."
        }
    },
    {
        title: "Конструкторы и ключевое слово base",
        description: "Создай иерархию классов: <code>Vehicle</code> (марка, год), <code>Car</code> (количество дверей) и <code>ElectricCar</code> (ёмкость батареи). Каждый производный класс должен через <code>base(...)</code> передавать параметры конструктору базового класса. Переопредели метод <code>ToString()</code> так, чтобы он выводил полную информацию об объекте, используя <code>base.ToString()</code>.",
        points: 8,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "var tesla = new ElectricCar(\"Tesla\", 2024, 4, 100);\nConsole.WriteLine(tesla);",
            output: "Vehicle: Tesla, 2024\nCar: 4 doors\nElectricCar: battery 100 kWh"
        }
    },
    {
        title: "Запечатанная иерархия (sealed)",
        description: "Создай три класса: <code>Account</code> → <code>BankAccount</code> → <code>SavingsAccount</code>. В <code>BankAccount</code> сделай виртуальный метод <code>CalculateInterest()</code>. В <code>SavingsAccount</code> переопредели его с модификатором <code>sealed override</code>. Попробуй создать класс <code>SuperSavings</code>, наследующий от <code>SavingsAccount</code>, и убедись, что переопределить <code>CalculateInterest()</code> в нём уже нельзя — компилятор выдаст ошибку. Задокументируй поведение в комментариях.",
        points: 6,
        difficulty: "Средняя",
        example: {
            type: "io",
            code: "Account acc = new SavingsAccount(1000);\nConsole.WriteLine(acc.CalculateInterest());\n// class SuperSavings : SavingsAccount\n// {\n//     public override double CalculateInterest() // ОШИБКА!\n//     // Нельзя переопределить sealed-метод\n// }",
            output: "50.00\n// SuperSavings не может переопределить CalculateInterest"
        }
    }
];