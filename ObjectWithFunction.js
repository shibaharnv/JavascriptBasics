let myfuncobject={

    fname:"shiba",
    lname:"Naga",
    fullname:function()
    {
        console.log(this.fname+this.lname)
    }

}
console.log(myfuncobject.fullname())
