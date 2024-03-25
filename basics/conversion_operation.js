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
/*
let somenumber =33
let stringS = String(somenumber)
console.log(typeof(stringS));   //converted to string
*/
    //                                        #operations
    // let value=5
    // let negvalue= -value
    // console.log(negvalue);
    
    // console.log(2+2); //& all the -,*,/ 
    // console.log(3**2); //read as 3 to the power two & thus gives 9
    // console.log(5%3);//gives remainder
 
    // let string1= "hello"
    // let string2= "hansa"
    // let string3= string1+string2
    // console.log(string3);
    // let string4=string2+string1
    // console.log(string4);
    // console.log("1"+2+4); //just merge
    // console.log(2+1+"1"); //solve and merge results
    // //pehle wale ko prioritize krta he
    // console.log(3+4/2*6-1); //followed bodmas
    //  console.log(+true);
    // console.log(+"");
    // console.log(true+2);


    //you can also do but isn't preferable:
    // let a,b,c
    // a = b = c = 10
    // console.log(a,b,c);

    //                                        #increment op(prefix, postfix)