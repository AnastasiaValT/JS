function age(age_1,age_2,age_3)
{
    if(!isNaN(age_1) && age_1 && !isNaN(age_2) && age_2 && !isNaN(age_3) && age_3)
        {
        if (Number(age_1) < Number(age_2))
        {
            alert (`You don’t have access cause your age is ${age_1} It’s less then ${age_2}`)
        } 
        else if (Number(age_1) >= Number(age_2) && Number(age_1)<Number(age_3))
        {
            alert ("Welcome  !")
        } 
        else if (Number(age_1) >= Number(age_3))
        {
            alert ("Keep calm and look Culture channel")
        } 
        else
        {
            alert ("Technical work")
        } 
   }
   else{
        alert("Error")
   }
     
   } 
let age_1= prompt('Enter age1')
let age_2= prompt('Enter age2')
let age_3= prompt('Enter age3')
age(age_1,age_2,age_3)

