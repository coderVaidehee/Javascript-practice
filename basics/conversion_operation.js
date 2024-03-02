/*                                          #NUMBER CONVERSION
let score = 33;
console.log(typeof (score));
score = "33";
console.log(typeof(score));
let somevalue = Number(score);
console.log(typeof(somevalue));
//now let's change score to some string and then convert it to a number under some value and see what it prints
score = "33abc";
somevalue = Number(score);
console.log(typeof(somevalue));      //it prints number
console.log(somevalue);             //it prints NaN
// jo number me convert nhi hote i.e. strings or null vo NaN print krdete he
*/

/*                                                 #BOOLEAN CONVERSION
let isLoggedIn=1;
let boolIsLogIn=Boolean(isLoggedIn)
console.log(boolIsLogIn);               //gives true, & obv will give false for isLoggedIn = 0

isLoggedIn = ""
boolIsLogIn=Boolean(isLoggedIn)
console.log(boolIsLogIn);               //empty string gives false

isLoggedIn = "vaidehee"
boolIsLogIn=Boolean(isLoggedIn)
console.log(boolIsLogIn);               //non empty string gives true
*/

//                                  #STRING CONVERSION
let somenumber =33
let stringS = String(somenumber)
console.log(typeof(stringS));   //converted to string