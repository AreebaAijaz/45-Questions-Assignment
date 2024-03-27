//Question30:
let User_names:string[]=[`Bossman`,`Admin`,`KingofStyle`,`Edgy`,`Sandy`]
for(let i=0 ; i<User_names.length ; i++){
if(User_names[i]=='Admin'){
console.log("Hello Admin, would you like to see a status report?")
}
else{
    console.log(`Hello ${User_names[i]} , Thankyou for logging in again.`)
}
}
