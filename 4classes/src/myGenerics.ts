// accept a specific type value and return a value with the same type.

function fn1(val: number): number{
    return val;
}

function fn2(val: any): any{
    return val;
}

// use generics

function gnFn<Type>(val: Type): Type{
    return val;
}



interface bottle{
    brand: string,
    valume: number
}

// gnFn<bottle>()


function fn4<T>(val: T[]): T[]{

    return val;
}

const fn5 = <T>(val: T[]):T => {
    return val[0];
}