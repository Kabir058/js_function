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

console.log(isEven(str))