// Function with Name

function add (a,b)
{
   return a+b
}

var returnvalue=add(1,2)

console.log(returnvalue)


// Anonymous function 

let value=function(c,d)
{
    return c+d
}
console.log("The value is %d",(value(3,9)))








let values=(c,d) => c+d
console.log("value is %d",values(5,6))