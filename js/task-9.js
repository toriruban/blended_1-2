// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

function isAdult(age){
     if (age >= 18){
        return true;
     } else {
        return confirm('Are you 18 or older ?');
     }
}


console.log(isAdult(3))
