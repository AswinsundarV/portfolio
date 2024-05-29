// console.log(1+"2"+"2");
// // console.log(1++"2"+"2");
// console.log("A"-"B"+"2");
// console.log( "A"- "B" + 2);
// console.log(typeof NaN);
// console.log(NaN===NaN);
// console.log(0.1+0.2===0.3);
// console.log(0.1+0.2);
// console.log(+"10"-"5");
// console.log("10"-"5");
// console.log(false=="0");
// console.log(false==="0");
// console.log(typeof null);
// console.log(null==undefined);
// console.log(null===undefined);
// console.log([]==![]);
// console.log([]==0);
// console.log([1,2,3]+[4,5,6]);
// console.log(1<2<3);
// console.log(3<2<1);



let numbers = [1,2,3,4,5,6,7,8,9,10];

let count =0
for(var i=0 ; i <= numbers.length;  i++){
    if (numbers[i]%2==0)
    count++;
}


console.log(count)