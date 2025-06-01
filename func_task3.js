// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers)
{
    let sum= 0;
    for(let number of numbers)
    {
        sum +=number;
        
    } let average= sum / numbers.length;
    return average;
}

let array =make_avg([2,4,6,5,9,30]) 
console.log(array)