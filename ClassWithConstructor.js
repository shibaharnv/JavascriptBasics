class testclass
{
    constructor(firstname)
    {
          
            //the firstname parameter scope is only inside the constructor inorder to make it available
            //across the class we need to use this keyword 
            this.firstname=firstname
    }

    fullname()
    {
        console.log(this.firstname)
    }
}

let obj1 = new testclass('shibahar')
let obj2 = new testclass('manoj')

obj1.fullname()
obj2.fullname()
