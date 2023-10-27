//In java script string is a array of characters

let day='tuesday'
console.log(day.length)
console.log(day[0])
console.log(day.slice(0,3))

let dayarray=day.split('s')
console.log("dayarray %s",dayarray)

console.log(dayarray[1])

let a='10'
let b='15'

let c= parseInt(b)-parseInt(a)
console.log(c)

var result=c.toString
console.log(typeof(result))


let days ="tuesday,friday"

days=days+"test"

console.log(days)


console.log(days.indexOf("day"))
console.log(days.indexOf("day",5))

let sent="tuesday is funday"

sent=sent.split(" ")

console.log("sent is %s",sent)

var expword="day";

let count=0

for(var i=0;i<sent.length;i++)
{
    var actualword=sent[i];

    console.log(actualword)

    if(actualword.includes(expword))
    {
count ++;
    }
}

console.log(count)