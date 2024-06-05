var number = 15;

if (typeof number !== 'number')
     {
    console.log("Please enter a number");
    }
     else if (number < 1)
    {
    console.log("Please enter a positive number");
    }
 else
  {
    var isPrime = true;
    for (var i = 2; i < number; i++)
     {
        if (number % i === 0) 
            {
                isPrime = false;
                break;
            }
    }

    if (isPrime)
     {
        console.log(number + " is a prime number");
     }
     else 
    {
        console.log(number + " is not a prime number");
    }
}
