// Create one function with zero parameter having a console statement;
// function sum(){
//     var X=10;
//     var Y=20
//     var Z=X+Y;

//     return Z;
// }
// console.log(sum());

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

// function sumoftwo(a,b){
//     return a+b;
// }
// console.log(sumoftwo(3,4));

// Create one arrow function

// const car=(a,b)=>{
    
//     return a+b;
// }
// let g=car(4,4);
// console.log(g);


// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();


// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };



// var x = 21;
// a();
// b();

//   function a() {
    
//    x = 20;
//   console.log(x);
// };
//  function b() {
    
//     x = 40;
//    console.log(x);
// };



function factorial(N){
    if(N==0 || N==1 ){
        return 1;
    }
    else{
        return N*factorial(N-1);
    }
}
 let N=factorial(4)
 console.log(N);