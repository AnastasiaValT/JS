
/*Задания с разным количеством звездочек
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {Ваши преобразования}
Вывести в консоль результат работы функции с возрастами 17, 18, 61 */

function age(age_1,age_2,age_3)
{
    if (Number(age_1) < Number(age_2))
    {
    return(`You don’t have access cause your age is ${age_1} It’s less then ${age_2}`)
    } 
    else if (Number(age_1) >= Number(age_2) && Number(age_1)<Number(age_3))
    {
    return ("Welcome  !")
    } 
    else if (Number(age_1) >= Number(age_3))
    {_
    return ("Keep calm and look Culture channel")
    } 
    else
    {
    return ("Technical work")} 
} 
let age_1=17
let age_2=18
let age_3=61 
const checkAge = age(age_1,age_2,age_3)
console.log(checkAge)


/* 2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.*/

function age(age_1,age_2,age_3)
{
    if (typeof age_1 !== "number" || typeof age_2 !== "number" || typeof age_3 !== "number") 
    return("Error")
    else if (age_1 < age_2)
    {
    return(`You don’t have access cause your age is ${age_1} It’s less then ${age_2}`)
    } 
    else if (age_1 >= age_2 && age_1<age_3)
    {
    return ("Welcome  !")
    } 
    else if (age_1 >= age_3)
    {_
    return ("Keep calm and look Culture channel")
    } 
    else
    {
    return ("Technical work")} 
} 
let age_1=17
let age_2="aa"
let age_3=61
const checkAge = age(age_1,age_2,age_3)
console.log(checkAge)


/* 3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number */

function age(age_1,age_2,age_3)
{
    if(!isNaN(age_1) && age_1 && !isNaN(age_2) && age_2 && !isNaN(age_3) && age_3)
        {
        if (Number(age_1) < Number(age_2))
        {
            return(`You don’t have access cause your age is ${age_1} It’s less then ${age_2}`)
        } 
        else if (Number(age_1) >= Number(age_2) && Number(age_1)<Number(age_3))
        {
            return ("Welcome  !")
        } 
        else if (Number(age_1) >= Number(age_3))
        {
            return ("Keep calm and look Culture channel")
        } 
        else
        {
            return ("Technical work")
        } 
   }
   else{
        return("Error")
   }
     
   } 
let age_1="2"
let age_2="18"
let age_3="60"
const checkAge = age(age_1,age_2,age_3)
console.log(checkAge)



