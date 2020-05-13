function isEven(num) {
    if (typeof (num) !== "number")
        return "Please enter a valid number";

    return num % 2 === 0;
}


var getSum = function (num1, num2) {
    return parseInt(num1) + parseInt(num2);
}