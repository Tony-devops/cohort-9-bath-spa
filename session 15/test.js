/*Complete the  five tasks set , 
1:  console log two variables 
2: create a function that takes two parameters, adds them together and then times them by another number. 
3:  create two new string variables  and  concat them into  1 string console log.
4: create an empty string variable . then assign it a new  string value. then assign it to that value plus a new value.
5: create a function that will compare two variables to see if they match and alert the user  to say if they do or don’t match
*/

/* 1 */
let variable1="tony"
console.log(variable1);
let variable2="apple"
console.log(variable2);

/* 2*/
function calc(a, b, c){
    let d=(a+b)*c;
    return d;
}

/*3*/
let fname="Tony";
let age= 40;
console.log('My name is ' + fname + 'and I am ' +age +' years old.' )

/*4*/
let something ='';
something ='Tony';
something ='Tony Arora';

/*5*/
function animals(a, b){
    if(a== b){
        console.log('They match');
    }else {
    console.log('They do not match')}
}



