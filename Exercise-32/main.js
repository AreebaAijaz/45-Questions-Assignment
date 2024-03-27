//Question32
var current_users = ["AISha", "MAria", "Sadia", "FAiza", "Iqra"];
var new_users = ["Areeba", "Aisha", "Sadia", "Samra", "Amna"];
new_users.forEach(function (newUsername) {
    var lowerCase = newUsername.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowerCase)) {
        console.log("The username ".concat(newUsername, " is not available. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(newUsername, " is available."));
    }
});
