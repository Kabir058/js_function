function isEven(str)
{   
    let size = str.length;
    if(size % 2===0)
    {
        return true;
    }
    return false;
}
let str= 'the quick';

// console.log(isEven(str))


function doubleOrTriple(number,doDouble){
    if(doDouble===true)
    {
        let result= number *2;
        return result;
    }
    else{
        let result = number *3;
        return result;
    }
}

console.log(doubleOrTriple(4,false))
console.log(doubleOrTriple(4,true))

function numberOfElements(numbers)
{
    let size =numbers.length;
    return size;
}

console.log(numberOfElements([12,42,35,12,64,23,15]))


function getAge(person)
{
    let age= person.age;
    return age;
}
console.log(getAge(18))
