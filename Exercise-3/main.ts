//Question03
let myName:string="Ali raza"

//uppercase:
console.log("Uppercase:", myName.toUpperCase())

//Lowercase
console.log("Lowercase:", myName.toLowerCase())

//titlecase:
console.log("Titlecase:",myName.replace(/\b\w/g,c=>c.toUpperCase()))
