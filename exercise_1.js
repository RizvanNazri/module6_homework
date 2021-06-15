const checkArr = () => {
    const arr = [null, 0, 7, 8, 11, 21, 25, 31, 99, "X", 0, true];

    let zero = 0;
    let even = 0;
    let odd = 0;

    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if(arr[i] === 0) {
                zero ++;
            } else if(arr[i] % 2 === 0) {
                even ++;
            } else if(arr[i] % 2 === 1) {
                odd ++;
            }
        }
    }

    console.log("четных элементов:",  even);
    console.log("нечетных элементов:", odd);
    console.log("нулей:", zero);
}

checkArr();