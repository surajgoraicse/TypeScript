type myData = string | number;

function user(data: myData): myData {
    console.log(typeof( data) == "number" ? data*10 : data.toUpperCase() );
    return data;
}

const response = user(19)


export {}