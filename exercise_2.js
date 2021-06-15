const checkNum = () => {
    let num = prompt("Введите число");
    let flag = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
        }
    }

    if(num > 1000) {
        console.log("Данные неверны");
    } else if(flag === false) {
        console.log("Число составное");
    } else {
        console.log("Число простое");
    }
}

checkNum();