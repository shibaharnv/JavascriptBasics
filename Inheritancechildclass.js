const Parentclass=require("./Inheritance.js")

class Childclass extends Parentclass
{

//if parent class is having any constructor then child class should have the constructor of same parameters

constructor(firstname,lastname)
{
    //call the parent class constructor -This is manadatoy step 
    super(firstname,lastname)
}

}

let childobj=new Childclass("mano","vasanthi")

childobj.method()




