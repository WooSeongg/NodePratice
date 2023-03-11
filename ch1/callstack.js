function first(){
    seconde();
    console.log("첫번째");
}

function seconde(){
    third();
    console.log("두번째");
}

function third(){
    console.log("세번째");
}

first();