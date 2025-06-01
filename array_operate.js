// give me a function to add all the elments in an array

function addArrayElements(numbers)
{  sum =0;
    for(let number of numbers)
        {
            sum= sum+number;
        }
      
    
        return sum;

}


let arr= [3,6,7];
console.log(addArrayElements(arr))