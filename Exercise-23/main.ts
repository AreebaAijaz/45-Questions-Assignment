//Question23:
//Test01:equality Comparison
let car:string="Banthley"
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

//Test05:Less than comparison
console.log("Is car <`Banthley`? | predicts false.")
console.log(car<`Banthley`) //false(lexicographic comparison)

//Test06:greater than comparison
console.log("Is car >`Banthley`? | predicts false.")
console.log(car>`Banthley`) //false(lexicographic comparison)

//Test07:less than or equal comnparison
console.log("Is car <=`Banthley`? | predicts true.")
console.log(car<=`Banthley`) //true

//Test08:greater than or equal comparison
console.log("Is car >=`Banthley`? | predicts true.")
console.log(car>=`Banthley`) //true

//Test09:Checking truthiness
console.log("Is car ? |predicts true.")
console.log(car) //true(non-empty string is truthy.)

//Test10:Checking falsiness
console.log("Is car ? |predicts false.")
console.log(car) //false(negation of a truthy value.)


