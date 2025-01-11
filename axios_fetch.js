// *******fetch method********
// function main(){
//     fetch("http://localhost:3000/ride1")
//     .then(async response =>{
//         const json = await response.json();
//         console.log(json)
//     })
// }
// main();

//the above is equivalent to below 

// const main = async ()=>{
//     const response = await fetch("http://localhost:3000/ride1")
//     const json= await response.json();
//     console.log(json)
// }
// main();

/***********axios method*********** 
 Axios inbuilt send you back the date in json so you don't have
 await to convert it into the json data as you did it in fetch.
So unlike fetch you to import the axios library(npm install axios)*/

//  const axios = require("axios")

//  async function main(){
//     const response = await axios.get("http://localhost:3000/ride1")
//     //response.data
//     console.log(response.data)
//  }
// main();

//Post, put, delete, get fetch

// async function main(){
    // const response= await fetch("https://www.postb.in/1736622722004-2808282466139", {method:"POST"})
//     const textualData= response.text()
//     console.log(textualData)
// }
// main()

/*Post, put, delete, get axios
For axios you dont have to exteranlly change the response to .json() or .text()
because it can able to parse it automatically*/

// const axios = require("axios")
// async function main(){
//     const response= await axios.post("https://www.postb.in/1736622722004-2808282466139")//Post, put, delete, get fetch
//     console.log(response.data)

// }
// main()

// body and header in axios

const axios = require("axios")
async function main(){
    const response= await axios.post(" https://httpdump.app/dumps/ad1611fd-a5d4-4d3a-afb2-9adfbe4243ec", {username: "lokesh", passworfd: "1234@"}, {headers:{Authorization:"Wolfff 321"}})
    console.log(response)

}
main();