function celsiusToFahrenheit(celsius: number): number {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
const celsius = 36;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);
