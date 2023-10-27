console.log("test")

let a=10;

console.log(a)

console.log(typeof(a))

let b="20"

console.log(typeof(b))

let c= true

console.log(typeof(c))

console.log(!c)

let d=null

console.log(d)


let x= "abc"
console.log(x)

x="ydf"
console.log(x)


var y= "gsdfg"
console.log(y)

y="aaaaa"
console.log(y)


const test="new"



const flag= true

if(!flag)
{
    console.log("flag is negative")
}
else

{
    console.log("flag is positive")
}

let j =0;

// while(i<10)
// {

//     console.log(i)
//     i++;
  
// }

do
{
    console.log("testing")
    j++;
    console.log(j)
}while(j<10)

for(let i=10;i<100;i=i+10)
{
    console.log(i)
}


var myArray= [90,89,100,98,90]

var subArray= myArray.slice(1,4)

console.log("subArray")

console.log(subArray)

console.log(myArray[2])

console.log(typeof(myArray[3]))

console.log(myArray.length)


myArray.push(105)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(1)
console.log(myArray)

myArray.shift(2)
console.log(myArray)
console.log(myArray.indexOf(100))
console.log(myArray.includes(505))

var sum=0
console.log("myArray")
console.log(myArray)

for(var k=0;k<myArray.length;k++)
{
    sum=sum+myArray[k]
}

console.log(sum)

var total=myArray.reduce((sum,myArray)=>sum+myArray,0)

console.log(total)

//find the sum of square of numbers in the array

var secArray= [2,3,4]

var ans=0;
for(var p=0;p<secArray.length;p++)
{

    ans=ans+(secArray[p]*secArray[p])
}
console.log("ans")
console.log(ans)


var ans2=secArray.reduce((ans,secArray)=>ans+(secArray*secArray),0)

console.log(ans2)


//filter the even numbers from the array

var thirdArray=[1,2,3,4,5]
var finalArr=[]
thirdArray=thirdArray.filter(num=>num%2==0)

console.log(thirdArray)

// find the even numbers in the array and then multiply them with two and finally add all the numbers


var fourthArray =[2,3,4,5,6,78]

fourthArray=fourthArray.filter(nume=>nume%2==0)
console.log("fourthArray")
console.log(fourthArray)

var totalans=fourthArray.reduce((sum,currentValue)=>sum+(currentValue*2),0)

console.log(totalans)


