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

