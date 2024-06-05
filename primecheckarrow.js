var isPrimeNum = (num) => {

    var isprime = true;

    if (typeof num !== 'number') {
        console.log("It is not a number");
    }
    else if (num === 1) {
        console.log("Number is not prime or composite");
    }
    else if (num > 1) {
        for (var i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isprime = false;
                break;
            }
        }
    } else {
        console.log("Number is negative number")
    
    }

    return isprime;
}

console.log(isPrimeNum(17));
