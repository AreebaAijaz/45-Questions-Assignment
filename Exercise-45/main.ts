//Question45
function car_information (manufacturer:string , model:string , ...additionalInfo){
   const car = {manufacturer , model , ...Object.fromEntries (additionalInfo)};
   return car;
}
const myCarInformation = car_information(`Toyota` , `Honda` , [`color` , `blue`], [`year` , 2023])
console.log(myCarInformation)