let  ageCalculation = function(birthYear:number){
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age 
}
const age = ageCalculation(2002);
console.log(age)
