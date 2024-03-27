//Question42
var magicians_name = ["Dynamo", "paul Daniels", "chris angel", "David Copperfield"];
function make_great(magicians_name) {
    for (var i = 0; i < magicians_name.length; i++) {
        console.log("The great ".concat(magicians_name[i]));
    }
}
make_great(magicians_name);
function show_magicians(magicians_name) {
    for (var i = 0; i < magicians_name.length; i++) {
        var element = magicians_name[i];
        console.log(magicians_name[i]);
    }
}
show_magicians(magicians_name);
