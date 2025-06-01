// create a function that wil return only even numbers
//sum of even numbers

// function get_Even(numbers)
// {
//    for(let number of numbers)
//    {  
//     if(number%2===0)
//     {
//         console.log(number)
//     }
//    }
// }
// let arr= [2,4,5,7,9,1,3,4,6,88,42]
// console.log(get_Even(arr))


// function get_Even(numbers)
// {  
//    for(i=0; i < numbers.length; i++)
//    {
//       if(numbers[i] % 2===0)
//       {
//         console.log(numbers[i])
//       }
   
//    }
// }
// let arr= [2,4,5,7,9,1,3,4,6,88,42];
// get_Even(arr);


//sum of even numbers

function sum_even(numbers)
{
    sum = 0;
    for(i=0; i<numbers.length; i++)
    {
        if(numbers[i]%2===0)
        {
            sum = sum + numbers[i];
            console.log(sum)
        }
    }
}

let array = [12,45,64,76,89,92,54]
sum_even(array)

function sumEven(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

const array = [12, 45, 64, 76, 89, 92, 54];
console.log(sumEven(array)); 
