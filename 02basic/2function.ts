
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




// function findProduct(num1: number, num2:number): string | number {
//     return num1 * num2;
// }

const findProduct = (num1: number, num2: number = 10): number => {
    return num1*num2
}

const ans = findProduct(10);




