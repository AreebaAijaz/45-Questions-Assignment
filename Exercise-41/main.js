// let magicians_name:string[]=[`Dynamo` , `paul Daniels` , `chris angel` , `David Copperfield`]
// function show_magicians (magicians_name:string[]){
//     magicians_name.forEach(element => {
//         console.log(element)
//     });
// }
// show_magicians(magicians_name)
var magicians_name = ["Dynamo", "paul Daniels", "chris angel", "David Copperfield"];
function show_magicians(magicians_name) {
    for (var i = 0; i < magicians_name.length; i++) {
        var element = magicians_name[i];
        console.log(magicians_name[i]);
    }
}
show_magicians(magicians_name);
