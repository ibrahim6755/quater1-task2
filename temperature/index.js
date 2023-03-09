function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
var celsius = 36;
var fahrenheit = celsiusToFahrenheit(celsius);
console.log("".concat(celsius, " degrees Celsius is equal to ").concat(fahrenheit, " degrees Fahrenheit."));
