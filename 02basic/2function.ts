
function findSquare(num: number): number  {
    return num*num;
}
const sq = findSquare(343)
console.log(sq);

function value(s: string): string {
    return "hello"
}

const getSum = (num1: number, num2: number) : number => {
    return num1 + num2;
}


const isEven= (num : number) : boolean | string  => {
    if (num % 2 == 0) {
        return true;
    }
    return "Number is not odd";
}