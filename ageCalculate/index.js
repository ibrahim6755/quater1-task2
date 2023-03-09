var ageCalculation = function (birthYear) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    return age;
};
var age = ageCalculation(2002);
console.log(age);
