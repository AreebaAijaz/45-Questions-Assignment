//Question32
let current_users: string[] = [`AISha`,`MAria`,`Sadia`,`FAiza`, `Iqra`]
let new_users: string[] = [`Areeba` , `Aisha` , `Sadia` , `Samra` , `Amna`]
new_users.forEach(newUsername => {
    let lowerCase:string = newUsername.toLowerCase()
    if(current_users.map(c_user =>c_user.toLowerCase()).includes(lowerCase)){
console.log(`The username ${newUsername} is not available. Please enter a new username.`)
    }
else{
    console.log(`The username ${newUsername} is available.`)
}
})