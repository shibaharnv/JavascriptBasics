
// //reduce function:

// myarr=[2,3,4,5,6]

// let variable=myarr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0)

// console.log(variable)

//accumulator will store the value that will be returned from the {}, for the first time initial value 0 will be stored in the accumulator


mynewarr=[2,3,5]

//find the sum of square of elements in the array without initial value

var anse=mynewarr.reduce((accumulator,currentvalue)=>accumulator+(currentvalue*currentvalue))
console.log("anse is %s" ,anse) 




















// // pick odd numbers from an array and form a new array

// var fullarray= [6,5,3,4]

// var oddarray=[]

// for(var i =0;i<fullarray.length;i++)
// {
//     if(fullarray[i]%2!=0)
//     {
//         oddarray.push(fullarray[i])
//     }
// }

// console.log("odd number array %s",oddarray)