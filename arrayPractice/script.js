function printReverse(input) {
    for(var i = input.length - 1; i >= 0; i--) {
        console.log(input[i]);
    }
}

function isUniform(input) {
    var firstItem = input[0];

    for(var i = 1; i < input.length; i++) {
        if(firstItem !== input[i]) {
            return false;
        }
    }
    return true;
}

function sumArray(input) {
    var sum = 0;

    input.forEach(function(element) {
        sum += element;
    });
    return sum;
}

function max(input) {
    var max = input[0];

    for(var i = 0; i < input.length; i++) {
        if(max < input[i]) {
            max = input[i];
        }
    }
    return max;
}