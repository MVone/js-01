const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

if (a===0 && b===0 && c===0) {
     return 'немає рішень';
} else {
solveQuadEq(a,b,c);
}

function calcDiscriminative(a, b, c)
{
    return (b*b - 4*a*c);
}

function solveQuadEq(a,b,c)
{
    const Discriminative=calcDiscriminative(a, b, c);
    if (Discriminative===0) {
        return 'x1=x2= ' + -b/(2*a);
}   else if (Discriminative<0) {
        return 'немає рішень'
}
    if (Discriminative>0) {
        const x1 = (-b - calcDiscriminative(a,b,c))/(2*a);
        const x2 = (-b + calcDiscriminative(a,b,c))/(2*a)
        return 'x1= ' + x1 + 'x2= ' + x2;
    }