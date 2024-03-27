// // //Question15:
var guest_list = ['Sadia', 'Mehwish', 'Mariya'];
var rejected_guest = "Mariya";
var new_guest = "Faiza";
console.log("Ms.".concat(rejected_guest, " is not coming on dinner."));
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++)
    [
        console.log("Respected Maam " + guest_list[i], ",\nYou're invited to have dinner with us tomorrow!\nThank you.\n")
    ];
//Question16:
console.log("GOOD NEWS! \nwe find 3 more tables for party.\n");
guest_list.unshift("Aqsa");
guest_list.splice(3, 0, "Shamsa");
guest_list.push("Aisha");
for (var i = 0; i < guest_list.length; i++)
    [
        console.log("Respected Maam ".concat(guest_list[i], ",\nIt is our pleasure to invite you in party.\n\nThank you.\n\n"))
    ];
