function isEven(num) {
    return num % 2 === 0;
}

function factorialOf(num) {

    if(num === 0) {
        return 1;
    }
    for(var i = num - 1; i > 0; i--) {
        num*=i;
    }
    return num;
}

function kebabToSnake(str) {
    var snakeString = str.replace(/-/g,"_");
    return snakeString;
}