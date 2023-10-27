arr =[1,2,3,4,5]

//pick the odd numbers from the array
oddarr=[]
for(let a=0;a<arr.length;a++)
{
    if(arr[a]%2!=0)
    {
        oddarr.push(arr[a])
    }
}

console.log(oddarr)

// same program using filter

var newoddarr=arr.filter(value=>value%2!=0)

console.log(newoddarr)