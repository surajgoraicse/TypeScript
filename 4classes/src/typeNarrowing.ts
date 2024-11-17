

function fn(val: number | string) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val.toFixed;
}