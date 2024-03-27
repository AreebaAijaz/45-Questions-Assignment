//Questions41

// let magicians_name:string[]=[`Dynamo` , `paul Daniels` , `chris angel` , `David Copperfield`]
// function show_magicians (magicians_name:string[]){
//     magicians_name.forEach(element => {
//         console.log(element)
//     });
// }
// show_magicians(magicians_name)


let magicians_name:string[]=[`Dynamo` , `paul Daniels` , `chris angel` , `David Copperfield`]
function show_magicians (magicians_name:string[]){
    for (let i = 0; i < magicians_name.length; i++) {
        const element = magicians_name[i];
        console.log(magicians_name[i])
    }
}
show_magicians(magicians_name)