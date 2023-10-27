var marks =[90,89,100,98,91]
console.log(marks)
console.log(marks[0])
console.log(marks[1])


console.log(marks.length)

marks.push(100)

console.log(marks)

marks.pop()
console.log(marks)

marks.unshift(12)

console.log(marks)


//************  Index of , includes and sub array */


var indexvalue=marks.indexOf(12)
console.log("index value result %s" ,indexvalue);

var indexvalue=marks.indexOf(99)
console.log("Index of value not present %s",indexvalue)

var isinclude =marks.includes(100)
console.log("is include  present %s",isinclude)


var slicearray=marks.slice(1,3)
console.log("slice array values %s",slicearray)


//**************************

//Sum of the elements present in the array

var sumarray=[1,2,3,4,5]

var totalsum=0

for(var i=0;i<sumarray.length;i++)
{

    totalsum=totalsum+sumarray[i]
}

console.log(totalsum)