// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function isOdd(number)
{
    if(number%2===1)
    {
        let value = number*2;
        return value;
    }
    else
    {
        result = number/2;
        return result;
    }
}

let nmbr = isOdd(6);
console.log(nmbr)