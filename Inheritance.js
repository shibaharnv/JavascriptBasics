class Parentclass
{
    constructor(firstname,lastname)
    {
            this.firstname=firstname
            this.lastname=lastname
    }

    method()
    {
       var output= this.firstname+this.lastname
       console.log(output)
    }
}

let obj=new Parentclass('shibahar','nagarajan')
obj.method();

module.exports = Parentclass;



