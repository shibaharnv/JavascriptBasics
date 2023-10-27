// find the even numbers in the array and then multiply them with two and finally add all the numbers

var myarray= [1,2,3,4,5]

var newarray=myarray.filter(value=>value%2==0).map(evennumber=>evennumber*2).reduce((acc,curr)=>(acc+curr),0)

console.log(newarray)