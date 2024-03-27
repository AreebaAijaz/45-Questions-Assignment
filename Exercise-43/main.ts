//Question43
let magicians_name:string[]=[`Dynamo` , `paul Daniels` , `chris angel` , `David Copperfield`]
function copy_array(arr:string[]){
    return[...arr]
}

function make_great(magiciansArray:string[]){
    for (let i = 0;  i< magiciansArray.length; i++) {
        magiciansArray[i] = "The great " + magiciansArray[i];
        console.log(magiciansArray[i]);
    }
}

function show_magicians (magicians_name:string[]){
    for (let i = 0; i < magicians_name.length; i++) {
        magicians_name[i] = magicians_name[i];
        console.log(magicians_name[i])
    }
}

const CopyMagicianArray = copy_array(magicians_name)
make_great(CopyMagicianArray)

console.log('\n\nThis is my original array.')
show_magicians(magicians_name)

console.log('\n\nThis is my modified copy of the array.')
show_magicians(CopyMagicianArray)
