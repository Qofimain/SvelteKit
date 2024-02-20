let a = ["tenet", "car", "aplle", "jam", "hotel", "adda"]

function palfilter(x)
{
    if(x == x.split('').reverse().join(''))
        return x
    
}
let polindrome = a.filter(palfilter)

console.log(polindrome)



function twoNum(c)
{
    return c.toFixed(2)
}
let floatnumb = [2.5425, 5.2584, 1.2517]

let mapfloat = floatnumb.map(twoNum)
console.log(mapfloat)
let u = mapfloat[1] * 100
