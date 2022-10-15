// 1) створити функцію яка приймає масив та виводить його
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// 5) створити функцію яка повертає найбільше число з масиву
// 6) створити функцію яка повертає найменьше число з масиву
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.


//===========================================


// // 1) створити функцію яка приймає масив та виводить його ↓
// function show_array(mas)
// {
//     console.log(mas);
// }

// const array = [1,5,7,2,6,8,8,1,2];

// show_array(array);



// // 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію ↓
// function show_array()
// {
//     let mas = [];
//     console.log(mas = (Math.floor(Math.random() * 10)) );

// }

// const array = [];
// for(let i=0; i<5; i++)
// {
//    show_array(array);
// }



// // 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!) ↓
// function minimal_digit(a,b,c)
// {
//     let min = 9999;
//     const dig = [a,b,c];

//     for(let i=0; i<dig.length; i++)
//     {
//         if(dig[i] < min)
//         {
//             min = dig[i];
            
//         }
//     }

//     console.log(min);
    
// }

// let a=21, b=09, c=2005

//    minimal_digit(a,b,c);



// // 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!) ↓
// function maximum_digit(a,b,c)
// {
//     let max = -9999;
//     const dig = [a,b,c];

//     for(let i=0; i<dig.length; i++)
//     {
//         if(dig[i] > max)
//         {
//             max = dig[i];
            
//         }
//     }

//     console.log(max);
    
// }

// let a=21, b=09, c=2005

// maximum_digit(a,b,c);



// // 5) створити функцію яка повертає найбільше число з масиву ↓
// function maximum_digit(dig)
// {
//     let min = 9999;

//     for(let i=0; i<dig.length; i++)
//     {
//         if(dig[i] < min)
//         {
//             min = dig[i];
            
//         }
//     }

//     console.log(min);
    
// }

// const mas = [21,09,2005];

//    maximum_digit(mas);



// // 6) створити функцію яка повертає найменьше число з масиву ↓
// function minimal_digit(dig)
// {
//     let max = -9999;

//     for(let i=0; i<dig.length; i++)
//     {
//         if(dig[i] > max)
//         {
//             max = dig[i];
            
//         }
//     }

//     console.log(max);
    
// }

// const mas = [21,09,2005];

// minimal_digit(mas);



// // 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його ↓
// function sum_digits(dig)
// {
//     let x = 0;

//     for(let i=0; i<dig.length; i++)
//     {
//         x += dig[i];
//     }

//     return console.log("Sum of all digits is:", x);
    
// }

// const mas = [2,7,2,1,5,7,8,9];

// console.log(mas);
// sum_digits(mas);



// // 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень ↓
// function arithmetic_mean(dig)
// {
//     let x = 0;

//     for(let i=0; i<dig.length; i++)
//     {
//         x += dig[i];
//     }

//     x /= (dig.length);

//     return console.log("Arithmetic mean of digits is:", x);
    
// }

// const mas = [2,7,12,1,5,7,8,9];

// console.log(mas);
// arithmetic_mean(mas);



// // 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів ↓
// function keys_returning(our_obj)
// {
//     return console.log(Object.keys(our_obj));
// }

// const   list = {

//     item1: 'bread',
//     item2: 'milk',
//     item3: 'beer',
//     item4: 'snacks'


// };


// keys_returning(list);



// // 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів ↓
// function keys_returning(our_obj)
// {
//     return console.log(Object.values(our_obj));
// }

// const   list = {

//     item1: 'bread',
//     item2: 'milk',
//     item3: 'beer',
//     item4: 'snacks'


// };

// keys_returning(list);




// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив ↓
// function sum_index(dig)
// {

//     for(let i=0; i<dig.length; i++)
//     {
//         if()
//         {

//         }                                                          ??????
//     }

    
// }

// const mas = [2,7,12,1,5,7,8,9];

// console.log(mas);
// sum_index(mas);






