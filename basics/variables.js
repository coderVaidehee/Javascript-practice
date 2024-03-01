const accId = 818     //';' is not necessary in js
let accPass ="root";    //always prefer 'let' over 'var' 
var accName = "vaidehee"    //var don't see scope, if a value under var is cahnged then it'll be changed for whole program rather than only within that scope, so prefer 'let' over 'var'
accState = "goa" //we can define like this but don.t prefer it ever
console.log(accState);
//accId = 2; bcoz const can't be changed
accName ="shalini "
accPass = "tree"
console.log(accPass);
console.log(accName);
let accCity
console.log(accCity);       // 'will print udefined'