// - 1.Створити масив з будь-якою кількістю елементів різного типу (string, number, boolean) та
// - 1.1 вивести в консоль лише цифри
// - 1.2 вивести в консоль лише стрічки, які мають 4 та більше символів.
// - 1.3 вивести лише булівські значення true


// 1.1 вивести в консоль лише цифри ↓
const mas = [1,'Hi',3,'Goodbye',5,true,5,8,3,1,false,'Hello World',10]
let n = mas.length;

for(let i=0; i < n; i++)
{
    if( (typeof mas[i]) == 'number' )
    {
        console.log(mas[i]);
    }
}



// 1.2 вивести в консоль лише стрічки, які мають 4 та більше символів ↓
const mas = [1,'Hi',3,'Goodbye',5,true,5,8,3,1,false,'Hello World',10]
let n = mas.length;

for(let i=0; i < n; i++)
{
    if( (typeof mas[i]) == 'string' && (mas[i].length) > 4)
    {
        console.log(mas[i]);
    }
}



// 1.3 вивести лише булівські значення true ↓
const mas = [1,'Hi',3,'Goodbye',5,true,5,8,3,1,false,'Hello World',10,true,false,5,7,3]
let n = mas.length;

for(let i=0; i < n; i++)
{
    if( (typeof mas[i]) == 'boolean' && (mas[i]) == true)
    {
        console.log('Boolean with index:', i, 'is', mas[i]);
    }
}






// - 2 Створити масив з 100 ітерацій, та вивести:
// - 2.1 кожен індекс 
// - 2.2 тільки парні індекси (2, 4, 6, 8 ...)
// - 2.3 індекси кратні 3 (3, 9, 12, 15 ...)


// 2.1 кожен індекс ↓
const mas = []

for(let i=0; i < 100; i++)
{
    let res = mas.push(i);
    console.log(mas[i]);
}



// 2.2 тільки парні індекси (2, 4, 6, 8 ...) ↓
const mas = []

for(let i=0; i < 100; i++)
{
    let res = mas.push(i);
    
    if(i % 2 == 0)
    {
        console.log(mas[i]);
    }
}



// 2.3 індекси кратні 3 (3, 9, 12, 15 ...) ↓
const mas = []

for(let i=0; i < 100; i++)
{
    let res = mas.push(i);
    
    if(i % 2 != 0)
    {
        console.log(mas[i]);
    }
}

// - 3.1 Дано масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// - 3.2 Дано масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// - 3.3 Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// - 3.4 Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// - 3.5 Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - 3.6 Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// - 3.7 Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.



// 3.1 Дано масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift() ↓
const mas = ['js', 'css', 'jq'] 
const n = mas.length;

    console.log(mas.shift());



// 3.2 Дано масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop() ↓
const mas = ['js', 'css', 'jq'] 
const n = mas.length;

    console.log(mas.pop());



// 3.3 Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]. ↓
const mas = [1, 2, 3, 4, 5];
const tmp = [];

tmp[1] = mas.pop();
tmp[0] = mas.pop();

mas.push('a','b','c',);

mas.push(tmp[0]);
mas.push(tmp[1]);


console.log(mas);

