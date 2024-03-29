let questionsCpp = [
    {
        level: 'elementary',
        question: 'Num adlı tam dəyişəni elan etmək üçün düzgün sintaksis hansıdır?',
        A: 'integer num',
        B: 'int num',
        C: 'float num',
        answer: 'int num'
    },
    {
        level: 'elementary',
        question: 'Dəyişənin yaddaş ünvanına daxil olmaq üçün hansı operatordan istifadə olunur?',
        A: '*',
        B: '?',
        C: '&',
        answer: '&'
    },
    {
        level: 'elementary',
        question: '"Hello World" outputu üçün düzgün sintaksis nədir?',
        A: ' cout<<"Hello World";',
        B: 'Console.WriteLine("Hello World");',
        C: 'print("Hello World");',
        answer: 'cout<<"Hello World";'
    },
    {
        level: 'elementary',
        question: 'Bir stringin uzunluğunu tapmaq üçün hansı üsuldan istifadə etmək olar?',
        A: 'getLength()',
        B: 'getSize()',
        C: 'length()',
        answer: 'length()'
    },
    {
        level: 'elementary',
        question: 'Mətn və hərfləri özündə saxlayan dəyişən tipi hansıdır?',
        A: 'string',
        B: 'float',
        C: 'int',
        answer: 'string'
    },
    {
        level: 'intermediate',
        question: '"const" açar sözünün məqsədi nədir?',
        A: 'Proqramda sonradan dəyişdirilə bilən dəyişəni elan etmək.',
        B: 'Proqram boyu istifadə oluna bilən sabit dəyəri müəyyən etmək.',
        C: 'Proqramda sonradan dəyişdirilə bilməyən dəyişəni elan etmək.',
        answer: 'Proqramda sonradan dəyişdirilə bilməyən dəyişəni elan etmək.'
    },
    {
        level: 'intermediate',
        question: 'Aşağıdakılardan hansı C++ dilində irsiyyət haqqında doğrudur?',
        A: 'Alınmış sinif yalnız bir əsas sinifdən miras qala bilər.',
        B: 'Alınmış sinif bir neçə əsas sinifdən miras qala bilər.',
        C: 'C++ dilində varislik dəstəklənmir.',
        answer: 'Alınmış sinif bir neçə əsas sinifdən miras qala bilər.'
    },
    {
        level: 'intermediate',
        question: 'C++ dilində virtual funksiya nədir?',
        A: 'Əsas sinifdə müəyyən edilən və törəmə sinifdə ləğv edilən funksiya.',
        B: 'Statik olaraq elan edilən funksiya.',
        C: 'Proqramın istənilən yerindən daxil olmaq mümkün olan funksiya.',
        answer: 'Əsas sinifdə müəyyən edilən və törəmə sinifdə ləğv edilən funksiya.'
    },
    {
        level: 'intermediate',
        question: 'Aşağıdakılardan hansı C++ giriş spesifikatoru deyil?',
        A: ' Public',
        B: 'Protected',
        C: 'Final',
        answer: 'Final'
    },
    {
        level: 'intermediate',
        question: 'Hansı kitabxana bizə giriş və çıxış obyektləri ilə işləməyə imkan verir?',
        A: '#include <stream>',
        B: '#include <iostream>',
        C: '#include <ofstream>',
        answer: '#include <iostream>'
    },
    {
        level: 'advanced',
        question: 'Göstərici ilə istinad arasındakı fərq nədir?',
        A: 'Göstəricilər null ola bilər, istinadlar ola bilməz',
        B: 'Göstəricilər dinamik məlumat strukturları yaratmaq üçün istifadə edilə bilər, istinadlar isə mümkün deyil',
        C: 'Göstəricilər yenidən təyin edilə bilər, istinadlar mümkün deyil',
        answer: 'Göstəricilər dinamik məlumat strukturları yaratmaq üçün istifadə edilə bilər, istinadlar isə mümkün deyil'
    },
    {
        level: 'advanced',
        question: 'C++ dilində şablon nədir?',
        A: 'İstənilən növ arqumenti qəbul edə bilən sinif',
        B: 'İstənilən növ arqument qəbul edə bilən funksiya',
        C: 'İstənilən funksiyada istifadə oluna bilən dəyişən',
        answer: 'İstənilən növ arqumenti qəbul edə bilən sinif'
    },
    {
        level: 'advanced',
        question: 'C++-da artımdan əvvəlki operator (++x) ilə artımdan sonrakı operator (x++) arasında nə fərq var?',
        A: 'Artımdan əvvəlki operator x-in yeni dəyərini, artımdan sonrakı operator isə x-in orijinal dəyərini qaytarır.',
        B: 'Artımdan əvvəlki operator x-in orijinal dəyərini, artımdan sonrakı operator isə x-in yeni dəyərini qaytarır.',
        C: 'Heç bir fərq yoxdur',
        answer: 'Artımdan əvvəlki operator x-in yeni dəyərini, artımdan sonrakı operator isə x-in orijinal dəyərini qaytarır.'
    },
    {
        level: 'advanced',
        question: 'Aşağıdakılardan hansı C++ dilində şablonların düzgün istifadəsi deyil?',
        A: 'Sinif şablonları',
        B: 'Makro şablonları',
        C: 'Dəyişən şablonlar',
        answer: 'Makro şablonları'
    },
    {
        level: 'advanced',
        question: 'C++ dilində noexcept təyinedicisi haqqında aşağıdakılardan hansı doğrudur?',
        A: 'Bir funksiyanın müəyyən edilmiş istisnadan başqa hər hansı bir istisna ata biləcəyini göstərmək üçün istifadə olunur',
        B: 'Bir funksiyanın yalnız müəyyən edilmiş istisnanı ata biləcəyini göstərmək üçün istifadə olunur',
        C: 'Bir funksiyanın heç vaxt istisna yaratmayacağını göstərmək üçün istifadə olunur',
        answer: 'Bir funksiyanın heç vaxt istisna yaratmayacağını göstərmək üçün istifadə olunur'
    }
]
let questionsCsharp = [
    {
        level: 'elementary',
        question: 'C# nədir?',
        A: 'Veb səhifələrin yaradılması üçün işarələmə dili',
        B: 'Proqram təminatının hazırlanması üçün versiyaya nəzarət sistemi',
        C: 'Microsoft tərəfindən hazırlanmış proqramlaşdırma dili',
        answer: 'Microsoft tərəfindən hazırlanmış proqramlaşdırma dili',
    },
    {
        level: 'elementary',
        question: 'Aşağıdakılardan hansı C#-da verilənlər növü deyil?',
        A: 'float',
        B: 'double',
        C: 'char',
        answer: 'double'
    },
    {
        level: 'elementary',
        question: 'Aşağıdakı açar sözlərdən hansı C#-da sinfi təyin etmək üçün istifadə olunur?',
        A: 'function',
        B: 'method',
        C: 'class',
        answer: 'class'
    },
    {
        level: 'elementary',
        question: 'C#-da for dövrü üçün düzgün sintaksis nədir?',
        A: 'for i = 0; i < n; i++',
        B: 'for (i = 0; i < n; i++)',
        C: 'for (i = 0; i < n; i+=)',
        answer: 'for (i = 0; i < n; i++)'
    },
    {
        level: 'elementary',
        question: 'Aşağıdakı operatorlardan hansı məntiqi AND operatorudur?',
        A: '&&',
        B: '&',
        C: '||',
        answer: '&&'
    },

    {
        level: 'intermediate',
        question: 'Aşağıdakılardan hansı C# dilində using ifadəsindən istifadə etməyin faydası DEYİL?',
        A: 'Adlandırmanın qarşısını alır',
        B: 'Obyektləri avtomatik məhv edir',
        C: 'Yazmağınız lazım olan kodun miqdarını azaldır',
        answer: 'Yazmağınız lazım olan kodun miqdarını azaldır'
    },
    {
        level: 'intermediate',
        question: 'C#-da struktur və sinif arasındakı fərq nədir?',
        A: 'Struktur istinad tipidir, sinif isə dəyər tipidir',
        B: 'Sinif istinad tipi, struktur isə dəyər tipidir',
        C: 'Həm struktur, həm də sinif dəyər növləridir',
        answer: 'Sinif istinad tipi, struktur isə dəyər tipidir'
    },
    {
        level: 'intermediate',
        question: 'C#-da async və await açar sözlərinin məqsədi nədir?',
        A: 'Bir metodu asinxron etmək və onun tamamlanmasını gözləmək',
        B: 'Bir metodu sinxronlaşdırmaq və onun tamamlanmasını gözləmək',
        C: 'Bir metodu ayrı bir mövzuda işlətmək üçün',
        answer: 'Bir metodu asinxron etmək və onun tamamlanmasını gözləmək'
    },
    {
        level: 'intermediate',
        question: 'C# dilində abstrakt sinif haqqında aşağıdakılardan hansı doğrudur?',
        A: 'Mücərrəd sinif miras alına bilməz.',
        B: 'Mücərrəd sinfi yaratmaq olmaz.',
        C: 'Mücərrəd sinifdə yalnız abstrakt üzvlər ola bilər.',
        answer: 'Mücərrəd sinfi yaratmaq olmaz.'
    },
    {
        level: 'intermediate',
        question: 'Aşağıdakı giriş modifikatorlarından hansı üzvü yalnız öz sinfi və ya strukturu daxilində əlçatan edir?',
        A: 'Public',
        B: 'Protected',
        C: 'Private',
        answer: 'Private'
    },
    {
        level: 'advanced',
        question: 'C#-da "ref" və "out" parametrləri arasında fərq nədir?',
        A: '“Out” parametrləri dəyərin metodla dəyişdirilməsinə imkan verir, “ref” parametrlərinə isə metodla qiymət verilməlidir.',
        B: '“Ref” parametrləri dəyərin metodla dəyişdirilməsinə imkan verir, “out” parametrlərinə isə metodla qiymət verilməlidir.',
        C: '“ref” və “out” parametrləri arasında fərq yoxdur.',
        answer: '“Ref” parametrləri dəyərin metodla dəyişdirilməsinə imkan verir, “out” parametrlərinə isə metodla qiymət verilməlidir.'
    },
    {
        level: 'advanced',
        question: 'C#-da "yield return"un məqsədi nədir?',
        A: 'iteratordan dəyəri qaytarmaq üçün "gəlir qaytarılması" istifadə olunur.',
        B: '“yeild return” yeni mövzu başlamaq üçün istifadə olunur.',
        C: 'dəyişəni təyin etmək üçün istifadə olunur.',
        answer: 'iteratordan dəyəri qaytarmaq üçün "gəlir qaytarılması" istifadə olunur.'
    },
    {
        level: 'advanced',
        question: 'C#-da genişləndirmə metodu nədir?',
        A: 'Genişləndirmə metodu statik metoddur ki, onu sinfin misalında çağırmaq olar.',
        B: 'Genişləndirmə metodu sinifdə çağırıla bilən statik olmayan metoddur.',
        C: 'Genişləndirmə metodu ilkin sinfi dəyişdirmədən mövcud sinfə yeni metodlar əlavə etmək üsuludur.',
        answer: 'Genişləndirmə metodu ilkin sinfi dəyişdirmədən mövcud sinfə yeni metodlar əlavə etmək üsuludur.'
    },
    {
        level: 'advanced',
        question: 'C#-da "as" və "is" operatorları arasında fərq nədir?',
        A: '“As” operatoru dəyərin konkret tipdə olub olmadığını yoxlayır, “is” operatoru isə dəyəri konkret tipə çevirməyə çalışır.',
        B: '“Is” operatoru dəyərin konkret tipdə olub olmadığını yoxlayır, “as” operatoru isə dəyəri konkret tipə çevirməyə çalışır.',
        C: 'C# dilində "as" və "is" operatorları arasında heç bir fərq yoxdur.',
        answer: '“Is” operatoru dəyərin konkret tipdə olub olmadığını yoxlayır, “as” operatoru isə dəyəri konkret tipə çevirməyə çalışır.'
    },
    {
        level: 'advanced',
        question: 'C#-da HashSet ilə SortedSet arasındakı fərq nədir?',
        A: 'HashSet sıralanmamış, SortedSet isə sıralanmışdır',
        B: 'SortedSet onun elementlərinin çeşidlənmiş qaydada saxlanmasına zəmanət verir',
        C: 'HashSet onun elementlərinin çeşidlənmiş qaydada saxlanmasına zəmanət verir',
        answer: 'HashSet sıralanmamış, SortedSet isə sıralanmışdır'
    }
]
let questionsJS = [
    {
        level: 'elementary',
        question: 'JavaScript-də dəyişəni təyin etməyin düzgün yolu nədir?',
        A: 'var variableName;',
        B: 'let variableName;',
        C: 'variableName = value',
        answer: 'let variableName;'
    },
    {
        level: 'elementary',
        question: 'Çapa nə veriləcək?  console.log(5 + "2");',
        A: '52',
        B: '"52"',
        C: '7',
        answer: '"52"'
    },
    {
        level: 'elementary',
        question: 'JavaScript-də döngədən çıxmaq üçün hansı ifadədən istifadə olunur?',
        A: 'continue;',
        B: 'exit;',
        C: 'break;',
        answer: 'break;'
    },
    {
        level: 'elementary',
        question: ' Müqayisənin nəticəsi nədir?  "2" == 2',
        A: 'null',
        B: 'true',
        C: 'false',
        answer: 'true'
    },
    {
        level: 'elementary',
        question: 'JavaScript-də funksiya elan etmək üçün hansı ifadədən istifadə olunur?',
        A: 'function myFunction()',
        B: 'myFunction()',
        C: 'Hər ikisi',
        answer: 'function myFunction()'
    },
    {
        level: 'intermediate',
        question: 'Aşağıdakılardan hansı massivin sonuna element əlavə etmək üçün daxili JavaScript metodudur?',
        A: 'push()',
        B: 'shift()',
        C: 'pop()',
        answer: 'push()'
    },
    {
        level: 'intermediate',
        question: 'JavaScript-in "this" açar sözü ilə bağlı aşağıdakılardan hansı doğrudur?',
        A: 'Hal-hazırda bir döngədə təkrarlanan obyektə aiddir.',
        B: 'Bu funksiyanın metodu olduğu obyektə aiddir.',
        C: 'Bu, cari funksiyanın əhatə dairəsinə aiddir.',
        answer: 'Bu funksiyanın metodu olduğu obyektə aiddir.'
    },
    {
        level: 'intermediate',
        question: ' JavaScript-də "==" və "===" operatorları arasında fərq nədir?',
        A: '"==" həm dəyəri, həm də növü müqayisə edir, "===" isə yalnız dəyəri müqayisə edir.',
        B: 'Onlar müxtəlif sintaksisi olan eyni operatordur.',
        C: '"===" həm dəyəri, həm də növü müqayisə edir, "==" isə yalnız dəyəri müqayisə edir.',
        answer: '"===" həm dəyəri, həm də növü müqayisə edir, "==" isə yalnız dəyəri müqayisə edir.'
    },
    {
        level: 'intermediate',
        question: 'JavaScript-də "var", "let" və "const" arasındakı fərq nədir?',
        A: 'Onların hamısı eynidir və bir-birini əvəz edə bilər.',
        B: '"var" qlobal dəyişənlər üçün, "let" və "const" isə blok əhatəli dəyişənlər üçün istifadə olunur.',
        C: '"const" sabitlər üçün, "var" və "let" isə dəyişənlər üçün istifadə olunur.',
        answer: '"var" qlobal dəyişənlər üçün, "let" və "const" isə blok əhatəli dəyişənlər üçün istifadə olunur.'
    },
    {
        level: 'intermediate',
        question: 'Aşağıdakılardan hansı JavaScript-də daha yüksək səviyyəli funksiyaya nümunədir?',
        A: 'setTimeout()',
        B: 'console.log()',
        C: 'Math.round()',
        answer: 'setTimeout()'
    },
    {
        level: 'advanced',
        question: 'JavaScript-də arrow function haqqında aşağıdakılardan hansı doğrudur?',
        A: '"this" açar sözü işlədilə bilməz.',
        B: '“return” ifadəsi ola bilməz.',
        C: 'Onlardan obyektlərdə metod kimi istifadə edilə bilməz.',
        answer: '"this" açar sözü işlədilə bilməz.'
    },
    {
        level: 'advanced',
        question: 'JavaScript-də generator funksiyası nədir?',
        A: 'Şəxsi xassələri olan obyektlər yaratmaq üçün istifadə edilə bilən funksiya.',
        B: 'Sinfin bir neçə nümunəsini yaratmaq üçün istifadə edilə bilən funksiya.',
        C: 'Pauza edilə və davam etdirilə bilən funksiya.',
        answer: 'Sinfin bir neçə nümunəsini yaratmaq üçün istifadə edilə bilən funksiya.'
    },
    {
        level: 'advanced',
        question: 'JavaScript-də "try...catch" ifadəsinin məqsədi nədir?',
        A: 'Bu, kodda səhvlərin və istisnaların zərif şəkildə idarə olunmasına imkan verir.',
        B: 'Müəyyən bir dəyər əsasında kodun şərti olaraq icrasına imkan verir.',
        C: 'Dəyişənlərin və funksiyaların "var" olmadan elan edilməsinə imkan verir.',
        answer: 'Bu, kodda səhvlərin və istisnaların zərif şəkildə idarə olunmasına imkan verir.'
    },
    {
        level: 'advanced',
        question: 'JavaScript-də dərhal çağırılan funksiya ifadəsi (IIFE) nədir?',
        A: 'Bir neçə dəfə çağırıla bilən funksiya.',
        B: 'Müəyyən olunan kimi yerinə yetirilən funksiya.',
        C: 'Yalnız müəyyən şərt yerinə yetirildikdə yerinə yetirilən funksiya.',
        answer: 'Müəyyən olunan kimi yerinə yetirilən funksiya.'
    },
    {
        level: 'advanced',
        question: 'JavaScript-də Promise nədir?',
        A: 'Hələ mövcud olmayan dəyəri təmsil edən obyekt.',
        B: 'Sonradan yeni qiymət təyin edilə bilən dəyişəni elan etmək üsulu.',
        C: 'Asinxron əməliyyatları idarə etmək və geri çağırış cəhənnəmindən qaçmaq üçün bir yol.',
        answer: 'Asinxron əməliyyatları idarə etmək və geri çağırış cəhənnəmindən qaçmaq üçün bir yol.'
    }

]
const body = document.getElementsByTagName("body");
const menu = document.querySelectorAll(".menu")[0];
const category = document.querySelectorAll('.category');
const cpp = document.querySelector('.cpp');
const csharp = document.querySelector('.csharp');
const javascript = document.querySelector('.javascript');

const levels = document.querySelectorAll('.levels');
const elementary = document.querySelector('#elementary');
const intermediate = document.querySelector('#intermediate');
const advanced = document.querySelector('#advanced');

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const a = document.querySelector('#A');
const b = document.querySelector('#B');
const c = document.querySelector('#C');
const main = document.querySelector('.main');
const span = document.getElementsByTagName('span');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next')
let questnum = 1;
let quest1num = 1;
let quest2num = 1;

let questionCppIndex = 0;
let questionCpp1Index = 0;
let questionCpp2Index = 0;


menu.addEventListener('click', () => {
    location.reload();
})
function initialize() {
    h1.style.marginLeft = '600px';
    h1.style.fontSize = '48px';
    h3.innerText = 'Please select a level';
    category.forEach(element => element.remove());
    levels.forEach(element => element.style.display = 'flex');
}
function displayQuestion(level, index) {
    const currentQuestion = questionsCpp.filter(question => question.level === level)[index];
    if (currentQuestion) {
        span[0].textContent = currentQuestion.question
        a.innerText = currentQuestion.A;
        b.innerText = currentQuestion.B;
        c.innerText = currentQuestion.C;
    }
}
cpp.addEventListener('click', () => {
    h1.innerText = 'C++';
    initialize();

    elementary.addEventListener('click', () => {
        h3.innerText = 'Good Luck!';

        levels.forEach(element => element.remove());
        main.style.display = 'flex';
        displayQuestion('elementary', questionCppIndex);

        next.addEventListener('click', () => {
            if (questnum === 5) {
                return 0;
            }
            questionCppIndex++;
            questnum++;
            h2.textContent = `Question ${questnum}/5`;
            displayQuestion('elementary', questionCppIndex);
        });

        previous.addEventListener('click', () => {
            if (questionCppIndex > 0) {
                questionCppIndex--;
                questnum--;
                h2.textContent = `Question ${questnum}/5`;
                displayQuestion('elementary', questionCppIndex);
            }
        });

        a.addEventListener('click', () => {
            const selectedOption = a.innerText;
            const currentQuestion = questionsCpp.filter(question => question.level === 'elementary')[questionCppIndex];
            if (selectedOption === currentQuestion.answer) {
                if (a.style.backgroundColor !== 'green');
                a.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (a.style.backgroundColor !== 'green') {
                    a.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });

        b.addEventListener('click', () => {
            const selectedOption = b.innerText;
            const currentQuestion = questionsCpp.filter(question => question.level === 'elementary')[questionCppIndex];
            if (selectedOption === currentQuestion.answer) {
                if (b.style.backgroundColor !== 'green');
                b.style.backgroundColor = 'green'
                a.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (b.style.backgroundColor !== 'green') {
                    b.style.backgroundColor = 'red';
                    a.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });

        c.addEventListener('click', () => {
            const selectedOption = c.innerText;
            const currentQuestion = questionsCpp.filter(question => question.level === 'elementary')[questionCppIndex];
            if (selectedOption === currentQuestion.answer) {
                if (c.style.backgroundColor !== 'green');
                c.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                a.style.backgroundColor = '';

            } else {
                if (c.style.backgroundColor !== 'green') {
                    c.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    a.style.backgroundColor = '';

                }
            }
        });
    });
    next.addEventListener('click', () => {
        if (questionCppIndex != 4 || questionCpp1Index != 4 || questionCpp2Index != 4) {
            a.style.backgroundColor = '';
            b.style.backgroundColor = '';
            c.style.backgroundColor = '';
        }
    });
    intermediate.addEventListener('click', () => {
        h3.innerText = 'Good Luck!';

        levels.forEach(element => element.remove());
        main.style.display = 'flex';
        displayQuestion('intermediate', questionCpp1Index);

        next.addEventListener('click', () => {
            if (quest1num === 5) {
                return;
            }
            questionCpp1Index++;
            quest1num++;
            h2.textContent = `Question ${quest1num}/5`;
            displayQuestion('intermediate', questionCpp1Index);
        });

        previous.addEventListener('click', () => {
            if (questionCpp1Index > 0) {
                questionCpp1Index--;
                quest1num--;
                h2.textContent = `Question ${quest1num}/5`;
                displayQuestion('intermediate', questionCpp1Index);
            }
        });
        a.addEventListener('click', () => {
            const selectedOption = a.innerText;
            const currentQuestion = questionsCpp.filter(question => question.level === 'intermediate')[questionCpp1Index];
            if (selectedOption === currentQuestion.answer) {
                if (a.style.backgroundColor !== 'green');
                a.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (a.style.backgroundColor !== 'green') {
                    a.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });

        b.addEventListener('click', () => {
            const selectedOption = b.innerText;
            const currentQuestion = questionsCpp.filter(question => question.level === 'intermediate')[questionCpp1Index];
            if (selectedOption === currentQuestion.answer) {
                if (b.style.backgroundColor !== 'green');
                b.style.backgroundColor = 'green'
                a.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (b.style.backgroundColor !== 'green') {
                    b.style.backgroundColor = 'red';
                    a.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });

        c.addEventListener('click', () => {
            const selectedOption = c.innerText;
            const currentQuestion = questionsCpp.filter(question => question.level === 'intermediate')[questionCpp1Index];
            if (selectedOption === currentQuestion.answer) {
                if (c.style.backgroundColor !== 'green');
                c.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                a.style.backgroundColor = '';

            } else {
                if (c.style.backgroundColor !== 'green') {
                    c.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    a.style.backgroundColor = '';

                }
            }
        });
    });

    advanced.addEventListener('click', () => {
        h3.innerText = 'Good Luck!';

        levels.forEach(element => element.remove());
        main.style.display = 'flex';
        displayQuestion('advanced', questionCpp2Index);

        next.addEventListener('click', () => {
            if (quest2num === 5) {
                return;
            }
            questionCpp2Index++;
            quest2num++;
            h2.textContent = `Question ${quest2num}/5`;
            displayQuestion('advanced', questionCpp2Index);
        });

        previous.addEventListener('click', () => {
            if (questionCpp2Index > 0) {
                questionCpp2Index--;
                quest2num--;
                h2.textContent = `Question ${quest2num}/5`;
                displayQuestion('advanced', questionCpp2Index);
            }
        });

        a.addEventListener('click', () => {
            const selectedOption = a.innerText;
            const currentQuestion = questionsCpp.filter(question => question.level === 'advanced')[questionCpp2Index];
            if (selectedOption === currentQuestion.answer) {
                if (a.style.backgroundColor !== 'green');
                a.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (a.style.backgroundColor !== 'green') {
                    a.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });

        b.addEventListener('click', () => {
            const selectedOption = b.innerText;
            const currentQuestion = questionsCpp.filter(question => question.level === 'advanced')[questionCpp2Index];
            if (selectedOption === currentQuestion.answer) {
                if (b.style.backgroundColor !== 'green');
                b.style.backgroundColor = 'green'
                a.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (b.style.backgroundColor !== 'green') {
                    b.style.backgroundColor = 'red';
                    a.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });

        c.addEventListener('click', () => {
            const selectedOption = c.innerText;
            const currentQuestion = questionsCpp.filter(question => question.level === 'advanced')[questionCpp2Index];
            if (selectedOption === currentQuestion.answer) {
                if (c.style.backgroundColor !== 'green');
                c.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                a.style.backgroundColor = '';

            } else {
                if (c.style.backgroundColor !== 'green') {
                    c.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    a.style.backgroundColor = '';

                }
            }
        });
    });
})

let csharpquestnum = 1;
let csharpquest1num = 1;
let csharpquest2num = 1;

let questionCsharpIndex = 0;
let questionCsharp1Index = 0;
let questionCsharp2Index = 0;
function displayQuestion1(level, index) {
    const currentQuestion1 = questionsCsharp.filter(questionn => questionn.level === level)[index];
    if (currentQuestion1) {
        span[0].textContent = currentQuestion1.question
        a.innerText = currentQuestion1.A;
        b.innerText = currentQuestion1.B;
        c.innerText = currentQuestion1.C;
    }
}
csharp.addEventListener('click', () => {
    h1.innerText = 'C#';
    initialize()
    elementary.addEventListener('click', () => {
        h3.innerText = 'Good Luck!';

        levels.forEach(element => element.remove());
        main.style.display = 'flex'
        displayQuestion1('elementary', questionCsharpIndex)


        next.addEventListener('click', () => {

            if (csharpquestnum === 5) {
                return;
            }
            questionCsharpIndex++;
            csharpquestnum++;
            h2.textContent = `Question ${csharpquestnum}/5`;
            displayQuestion1('elementary', questionCsharpIndex);
        });
        previous.addEventListener('click', () => {
            if (questionCsharpIndex > 0) {
                questionCsharpIndex--;
                csharpquestnum--
                h2.textContent = `Question ${csharpquestnum}/5`;
                displayQuestion1('elementary', questionCsharpIndex);
            }
        });
        a.addEventListener('click', () => {
            const selectedOption = a.innerText;
            const currentQuestion = questionsCsharp.filter(question => question.level === 'elementary')[questionCsharpIndex];
            if (selectedOption === currentQuestion.answer) {
                if (a.style.backgroundColor !== 'green');
                a.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (a.style.backgroundColor !== 'green') {
                    a.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });

        b.addEventListener('click', () => {
            const selectedOption = b.innerText;
            const currentQuestion = questionsCsharp.filter(question => question.level === 'elementary')[questionCsharpIndex];
            if (selectedOption === currentQuestion.answer) {
                if (b.style.backgroundColor !== 'green');
                b.style.backgroundColor = 'green'
                a.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (b.style.backgroundColor !== 'green') {
                    b.style.backgroundColor = 'red';
                    a.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });
        c.addEventListener('click', () => {
            const selectedOption = c.innerText;
            const currentQuestion = questionsCsharp.filter(question => question.level === 'elementary')[questionCsharpIndex];
            if (selectedOption === currentQuestion.answer) {
                if (c.style.backgroundColor !== 'green');
                c.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                a.style.backgroundColor = '';

            } else {
                if (c.style.backgroundColor !== 'green') {
                    c.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    a.style.backgroundColor = '';

                }
            }
        });
    })
    next.addEventListener('click', () => {
        if (questionCsharpIndex != 4 || questionCsharp1Index != 4 || questionCsharp2Index != 4) {
            a.style.backgroundColor = '';
            b.style.backgroundColor = '';
            c.style.backgroundColor = '';
        }
    });
    previous.addEventListener('click', () => {
        a.style.backgroundColor = '';
        b.style.backgroundColor = '';
        c.style.backgroundColor = '';
    });
    intermediate.addEventListener('click', () => {
        h3.innerText = 'Good Luck!';

        levels.forEach(element => element.remove());
        main.style.display = 'flex'
        displayQuestion1('intermediate', questionCsharp1Index)

        next.addEventListener('click', () => {

            if (csharpquest1num === 5) {
                return;
            }
            questionCsharp1Index++;
            csharpquest1num++;
            h2.textContent = `Question ${csharpquest1num}/5`;
            displayQuestion1('intermediate', questionCsharp1Index);
        });
        previous.addEventListener('click', () => {
            if (questionCsharp1Index > 0) {
                questionCsharp1Index--;
                csharpquest1num--
                h2.textContent = `Question ${csharpquest1num}/5`;
                displayQuestion1('intermediate', questionCsharp1Index);
            }
        });
        a.addEventListener('click', () => {
            const selectedOption = a.innerText;
            const currentQuestion = questionsCsharp.filter(question => question.level === 'intermediate')[questionCsharp1Index];
            if (selectedOption === currentQuestion.answer) {
                if (a.style.backgroundColor !== 'green');
                a.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (a.style.backgroundColor !== 'green') {
                    a.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });
        b.addEventListener('click', () => {
            const selectedOption = b.innerText;
            const currentQuestion = questionsCsharp.filter(question => question.level === 'intermediate')[questionCsharp1Index];
            if (selectedOption === currentQuestion.answer) {
                if (b.style.backgroundColor !== 'green');
                b.style.backgroundColor = 'green'
                a.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (b.style.backgroundColor !== 'green') {
                    b.style.backgroundColor = 'red';
                    a.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });
        c.addEventListener('click', () => {
            const selectedOption = c.innerText;
            const currentQuestion = questionsCsharp.filter(question => question.level === 'intermediate')[questionCsharp1Index];
            if (selectedOption === currentQuestion.answer) {
                if (c.style.backgroundColor !== 'green');
                c.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                a.style.backgroundColor = '';

            } else {
                if (c.style.backgroundColor !== 'green') {
                    a.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    a.style.backgroundColor = '';

                }
            }
        });
    })

    advanced.addEventListener('click', () => {
        h3.innerText = 'Good Luck!';

        levels.forEach(element => element.remove());
        main.style.display = 'flex'
        displayQuestion1('advanced', questionCsharp2Index)
        next.addEventListener('click', () => {

            if (csharpquest2num === 5) {
                return;
            }
            questionCsharp2Index++;
            csharpquest2num++;
            h2.textContent = `Question ${csharpquest2num}/5`;
            displayQuestion1('advanced', questionCsharp2Index);
        });
        previous.addEventListener('click', () => {
            if (questionCsharp2Index > 0) {
                questionCsharp2Index--;
                csharpquest2num--
                h2.textContent = `Question ${csharpquest2num}/5`;
                displayQuestion('advanced', questionCsharp2Index);
            }
        });
        a.addEventListener('click', () => {
            const selectedOption = a.innerText;
            const currentQuestion = questionsCsharp.filter(question => question.level === 'advanced')[questionCsharp2Index];
            if (selectedOption === currentQuestion.answer) {
                if (a.style.backgroundColor !== 'green');
                a.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (a.style.backgroundColor !== 'green') {
                    a.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });
        b.addEventListener('click', () => {
            const selectedOption = b.innerText;
            const currentQuestion = questionsCsharp.filter(question => question.level === 'advanced')[questionCsharp2Index];
            if (selectedOption === currentQuestion.answer) {
                if (b.style.backgroundColor !== 'green');
                b.style.backgroundColor = 'green'
                a.style.backgroundColor = '';
                c.style.backgroundColor = '';

            } else {
                if (b.style.backgroundColor !== 'green') {
                    b.style.backgroundColor = 'red';
                    a.style.backgroundColor = '';
                    c.style.backgroundColor = '';

                }
            }
        });
        c.addEventListener('click', () => {
            const selectedOption = c.innerText;
            const currentQuestion = questionsCsharp.filter(question => question.level === 'advanced')[questionCsharp2Index];
            if (selectedOption === currentQuestion.answer) {
                if (c.style.backgroundColor !== 'green');
                c.style.backgroundColor = 'green'
                b.style.backgroundColor = '';
                a.style.backgroundColor = '';

            } else {
                if (c.style.backgroundColor !== 'green') {
                    c.style.backgroundColor = 'red';
                    b.style.backgroundColor = '';
                    a.style.backgroundColor = '';

                }
            }
        });
    })
})

let JSnum = 1;
let JS1num = 1;
let JS2num = 1;

let JSindex = 0;
let JS1index = 0;
let JS2index = 0;
function displayQuestion2(level, index) {
    const currentQuestion2 = questionsJS.filter(questionnn => questionnn.level === level)[index];
    if (currentQuestion2) {
        span[0].textContent = currentQuestion2.question
        a.innerText = currentQuestion2.A;
        b.innerText = currentQuestion2.B;
        c.innerText = currentQuestion2.C;
    }
}
javascript.addEventListener('click', () => {
    h1.innerText = 'JavaScript';
    h1.style.marginLeft = '550px';
    h1.style.fontSize = '48px';
    h3.innerText = 'Please select a level';
    category.forEach(element => element.remove());
    levels.forEach(element => element.style.display = 'flex');
    elementary.addEventListener('click', () => {
        h3.innerText = 'Good Luck!';

        levels.forEach(element => element.remove());
        main.style.display = 'flex'
        displayQuestion2('elementary', JSindex)
    })
    next.addEventListener('click', () => {

        if (JSnum === 5) {
            return;
        }
        JSindex++;
        JSnum++;
        h2.textContent = `Question ${JSnum}/5`;
        displayQuestion2('elementary', JSindex);
    });
    previous.addEventListener('click', () => {
        if (JSindex > 0) {
            JSindex--;
            JSnum--
            h2.textContent = `Question ${JSnum}/5`;
            displayQuestion2('elementary', JSindex);
        }
    });
    a.addEventListener('click', () => {
        const selectedOption = a.innerText;
        const currentQuestion = questionsJS.filter(question => question.level === 'elementary')[JSindex];
        if (selectedOption === currentQuestion.answer) {
            if (a.style.backgroundColor !== 'green');
            a.style.backgroundColor = 'green'
            b.style.backgroundColor = '';
            c.style.backgroundColor = '';

        } else {
            if (a.style.backgroundColor !== 'green') {
                a.style.backgroundColor = 'red';
                b.style.backgroundColor = '';
                c.style.backgroundColor = '';

            }
        }
    });

    b.addEventListener('click', () => {
        const selectedOption = b.innerText;
        const currentQuestion = questionsJS.filter(question => question.level === 'elementary')[JSindex];
        if (selectedOption === currentQuestion.answer) {
            if (b.style.backgroundColor !== 'green');
            b.style.backgroundColor = 'green'
            a.style.backgroundColor = '';
            c.style.backgroundColor = '';

        } else {
            if (b.style.backgroundColor !== 'green') {
                b.style.backgroundColor = 'red';
                a.style.backgroundColor = '';
                c.style.backgroundColor = '';

            }
        }
    });
    c.addEventListener('click', () => {
        const selectedOption = c.innerText;
        const currentQuestion = questionsJS.filter(question => question.level === 'elementary')[JSindex];
        if (selectedOption === currentQuestion.answer) {
            if (c.style.backgroundColor !== 'green');
            c.style.backgroundColor = 'green'
            b.style.backgroundColor = '';
            a.style.backgroundColor = '';

        } else {
            if (c.style.backgroundColor !== 'green') {
                c.style.backgroundColor = 'red';
                b.style.backgroundColor = '';
                a.style.backgroundColor = '';

            }
        }
    });
})
next.addEventListener('click', () => {
    if (JSindex != 4 || JS1index != 4 || JS2index != 4) {
        a.style.backgroundColor = '';
        b.style.backgroundColor = '';
        c.style.backgroundColor = '';
    }
});
previous.addEventListener('click', () => {
    a.style.backgroundColor = '';
    b.style.backgroundColor = '';
    c.style.backgroundColor = '';
});
intermediate.addEventListener('click', () => {
    h3.innerText = 'Good Luck!';

    levels.forEach(element => element.remove());
    main.style.display = 'flex'
    displayQuestion2('intermediate', JS1index)
    next.addEventListener('click', () => {

        if (JS1num === 5) {
            return;
        }
        JS1index++;
        JS1num++;
        h2.textContent = `Question ${JS1num}/5`;
        displayQuestion2('intermediate', JS1index);
    });
    previous.addEventListener('click', () => {
        if (JS1index > 0) {
            JS1index--;
            JS1num--
            h2.textContent = `Question ${JS1num}/5`;
            displayQuestion2('intermediate', JS1index);
        }
    });
    a.addEventListener('click', () => {
        const selectedOption = a.innerText;
        const currentQuestion = questionsJS.filter(question => question.level === 'intermediate')[JS1index];
        if (selectedOption === currentQuestion.answer) {
            if (a.style.backgroundColor !== 'green');
            a.style.backgroundColor = 'green'
            b.style.backgroundColor = '';
            c.style.backgroundColor = '';

        } else {
            if (a.style.backgroundColor !== 'green') {
                a.style.backgroundColor = 'red';
                b.style.backgroundColor = '';
                c.style.backgroundColor = '';

            }
        }
    });

    b.addEventListener('click', () => {
        const selectedOption = b.innerText;
        const currentQuestion = questionsJS.filter(question => question.level === 'intermediate')[JS1index];
        if (selectedOption === currentQuestion.answer) {
            if (b.style.backgroundColor !== 'green');
            b.style.backgroundColor = 'green'
            a.style.backgroundColor = '';
            c.style.backgroundColor = '';

        } else {
            if (b.style.backgroundColor !== 'green') {
                b.style.backgroundColor = 'red';
                a.style.backgroundColor = '';
                c.style.backgroundColor = '';

            }
        }
    });
    c.addEventListener('click', () => {
        const selectedOption = c.innerText;
        const currentQuestion = questionsJS.filter(question => question.level === 'intermediate')[JS1index];
        if (selectedOption === currentQuestion.answer) {
            if (c.style.backgroundColor !== 'green');
            c.style.backgroundColor = 'green'
            b.style.backgroundColor = '';
            a.style.backgroundColor = '';

        } else {
            if (c.style.backgroundColor !== 'green') {
                c.style.backgroundColor = 'red';
                b.style.backgroundColor = '';
                a.style.backgroundColor = '';

            }
        }
    });
})
advanced.addEventListener('click', () => {
    h3.innerText = 'Good Luck!';

    levels.forEach(element => element.remove());
    main.style.display = 'flex'
    displayQuestion2('advanced', JS2index)
    next.addEventListener('click', () => {

        if (JS2num === 5) {
            return;
        }
        JS2index++;
        JS2num++;
        h2.textContent = `Question ${JS2num}/5`;
        displayQuestion2('advanced', JS2index);
    });
    previous.addEventListener('click', () => {
        if (JS2index > 0) {
            JS2index--;
            JS2num--
            h2.textContent = `Question ${JS2num}/5`;
            displayQuestion2('advanced', JS2index);
        }
    });
    a.addEventListener('click', () => {
        const selectedOption = a.innerText;
        const currentQuestion = questionsJS.filter(question => question.level === 'advanced')[JS2index];
        if (selectedOption === currentQuestion.answer) {
            if (a.style.backgroundColor !== 'green');
            a.style.backgroundColor = 'green'
            b.style.backgroundColor = '';
            c.style.backgroundColor = '';

        } else {
            if (a.style.backgroundColor !== 'green') {
                a.style.backgroundColor = 'red';
                b.style.backgroundColor = '';
                c.style.backgroundColor = '';

            }
        }
    });

    b.addEventListener('click', () => {
        const selectedOption = b.innerText;
        const currentQuestion = questionsJS.filter(question => question.level === 'advanced')[JS2index];
        if (selectedOption === currentQuestion.answer) {
            if (b.style.backgroundColor !== 'green');
            b.style.backgroundColor = 'green'
            a.style.backgroundColor = '';
            c.style.backgroundColor = '';

        } else {
            if (b.style.backgroundColor !== 'green') {
                b.style.backgroundColor = 'red';
                a.style.backgroundColor = '';
                c.style.backgroundColor = '';

            }
        }
    });
    c.addEventListener('click', () => {
        const selectedOption = c.innerText;
        const currentQuestion = questionsJS.filter(question => question.level === 'advanced')[JS2index];
        if (selectedOption === currentQuestion.answer) {
            if (c.style.backgroundColor !== 'green');
            c.style.backgroundColor = 'green'
            b.style.backgroundColor = '';
            a.style.backgroundColor = '';

        } else {
            if (c.style.backgroundColor !== 'green') {
                c.style.backgroundColor = 'red';
                b.style.backgroundColor = '';
                a.style.backgroundColor = '';

            }
        }
    });
})