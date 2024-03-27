var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question43
var magicians_name = ["Dynamo", "paul Daniels", "chris angel", "David Copperfield"];
function copy_array(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magiciansArray) {
    for (var i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = "The great " + magiciansArray[i];
        console.log(magiciansArray[i]);
    }
}
function show_magicians(magicians_name) {
    for (var i = 0; i < magicians_name.length; i++) {
        magicians_name[i] = magicians_name[i];
        console.log(magicians_name[i]);
    }
}
var CopyMagicianArray = copy_array(magicians_name);
make_great(CopyMagicianArray);
console.log('\n\nThis is my original array.');
show_magicians(magicians_name);
console.log('\n\nThis is my modified copy of the array.');
show_magicians(CopyMagicianArray);
