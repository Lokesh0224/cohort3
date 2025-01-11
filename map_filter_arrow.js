// function sum(a, b){
//     return a+ b
// }
//the above is equivalent to the below

// const sum= (a,b)=>{
//     return a+b;
// }

// ap.get("/", function(req, res){

// })
//the above is equivalent to the below

// ap.get("/", (req, res)=>{

// }) 
//**************** 
//map function
// const input=[ 1, 2, 3, 4, 5]
// const newArray=[];
// for (let i=0; i<input.length; i++){
//     newArray.push(input[i]*2)
// }
// console.log(newArray)

//the above is equivalent to the below

// const input=[ 1, 2, 3, 4, 5]
// function transform(i){
//     return i*2;
// }
// const ans= input.map(transform)
// console.log(ans)

//can also be written as 

// const input= [1, 2, 3, 4, 5]
// const ans= input.map(function(i){
//     return i*2
// })
// console.log(ans)
//*****************
//filter function
//Q)only even values, print true or false
const arr= [1,2,3,4,5]
const ans = arr.filter((n)=>{
    if(n%2==0){
        return true
    }
    else{
        return false
    }
})
console.log(ans)



