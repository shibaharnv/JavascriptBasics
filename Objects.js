let object ={

    firstname:'shibahar',
    lastname:'nagarajan'
}

console.log(object)
object.firstname='s'
console.log(object)
object.gender='male'
console.log(object)
console.log(object)

console.log(object.firstname)

console.log(object['lastname'])

// delete object.gender

// console.log(object)


//Check if the property is present in the object

console.log('firstname' in object)

//print all the properties or eelement present in the object


for(let key in object)
{
    console.log(object[key])
}