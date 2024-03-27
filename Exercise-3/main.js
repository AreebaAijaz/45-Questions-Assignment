//Question03
var myName = "Ali raza";
//uppercase:
console.log("Uppercase:", myName.toUpperCase());
//Lowercase
console.log("Lowercase:", myName.toLowerCase());
//titlecase:
console.log("Titlecase:", myName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
