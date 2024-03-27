//Question42
let magicians_name:string[]=[`Dynamo` , `paul Daniels` , `chris angel` , `David Copperfield`]
function make_great(magicians_name:string[]){
    for (let i = 0;  i< magicians_name.length; i++) {
        console.log(`The great ${magicians_name[i]}`);
    }
}
make_great(magicians_name)


function show_magicians (magicians_name:string[]){
    for (let i = 0; i < magicians_name.length; i++) {
        const element = magicians_name[i];
        console.log(magicians_name[i])
    }
}
show_magicians(magicians_name)