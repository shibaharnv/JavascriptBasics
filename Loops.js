const flag = true
if(!!flag)
{
    console.log("positive")
}

else
{
    console.log("Negative")
}



for(let a=10;a<20;a++)
{
    console.log(a)

}

let i=0

while(i<10)
{
    console.log(i)
    i++
}

let x=0

do
{
console.log("testing do loop1")

}while(x<0);
console.log("testing do loop2")



for(let c=0;c<10;c++)
{
    console.log("C++")
}


//for number 1 to 10 print the common multiples of 2 and 5

//iterate the loop between 1 to 10 // take the first value and eck modulos of 2 and 5 is ==0

let n=0;

for(let g=1;g<=100;g++)
{
    if(g%2==0 && g%5==0)
    {
        n++
        console.log(g)

        if(n==3)
        {
            break
        }
    }
}