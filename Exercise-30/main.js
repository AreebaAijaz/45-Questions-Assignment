//Question30:
var User_names = ["Bossman", "Admin", "KingofStyle", "Edgy", "Sandy"];
for (var i = 0; i < User_names.length; i++) {
    if (User_names[i] == 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(User_names[i], " , Thankyou for logging in again."));
    }
}
