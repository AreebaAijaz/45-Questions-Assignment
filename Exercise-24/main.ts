//Question24:
let car:string="Banthley"
let age:number=27
let fruits:string[] = [`apple`,`mango`,`guava`] 

//**EQUALITY AND INEQUALITY TEST **//
//Test01:equality Comparison
console.log("Is car ==`Banthley`? | predicts true.")
console.log(car==`Banthley`) //true

//Test02:Strict equality comparison
console.log("Is car ===`Banthley`? | predicts true.")
console.log(car===`Banthley`) //true

//Test03:Inequality comparison
console.log("Is car !=`Banthley`? | predicts false.")
console.log(car!=`Banthley`) //false

//Test04:Strict inequality comparison
console.log("Is car !==`Banthley`? | predicts false.")
console.log(car!==`Banthley`) //false

//**LOWER CASE FUNCTION TEST**//
//Test05:Lowercase Conversion
console.log("Is car.toLowerCase() ==`Banthley`? | predicts true.")
console.log(car.toLowerCase()) //true

//Test06:Lowercase Conversion
console.log("Is car ===car.toLowerCase | predicts false.")
console.log(car === car.toLowerCase()) //false

//**Numerical Test**//
//Test07:Equality test
console.log("Is age==27? | predicts true")
console.log(age==27) //true

//Test08:Strict equality test
console.log("Is age===27? | predicts true")
console.log(age===27) //true

//Test09:Inequality test
console.log("Is age!=27? | predicts false")
console.log(age!=27) //false

//Test10:Strict inequality test
console.log("Is age!==27? | predicts false")
console.log(age!==27) //false

//Test11:Greater than test
console.log("Is age>27? | predicts false")
console.log(age>27) //false

//Test12:Less than test
console.log("Is age<27? | predicts false")
console.log(age<27) //false

//Test13:Greater than or equal test
console.log("Is age>=27? | predicts true")
console.log(age>=27) //true

//Test14:Less than or equal test
console.log("Is age<=27? | predicts true")
console.log(age<=27) //true

//**LOGICAL OPERATORS**//
//Test15:AND condition
console.log("Is age>20 && age<30? | predicts true") 
console.log(age>20 && age<30) //both conditions meet

console.log("Is age>20 && age<30? | predicts false") 
console.log(age>20 && age<25) //only one condition meets

//Test16:OR Condition
console.log("Is age>20 || age<30? | predicts true") 
console.log(age>20 && age<30) //both conditions meet

console.log("Is age>20 || age<30? | predicts true") 
console.log(age>20 && age<30) //one condition meets

//** ARRAY TEST**//
//Test17: In operator
console.log("Is guava in fruits? | predicts true")
console.log(fruits.includes("guava"))

//Test18: Not in operator
console.log("Is strawberry in fruits? | predicts false")
console.log(fruits.includes("strawberry"))





























