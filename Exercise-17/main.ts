// // //Question15:
let guest_list:string[] = ['Sadia','Mehwish','Mariya'];
let rejected_guest:string= "Mariya";
let new_guest:string= "Faiza";
console.log(`Ms.${rejected_guest} is not coming on dinner.`)
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length ; i++)[
    console.log("Respected Maam " + guest_list[i],`,\nYou're invited to have dinner with us tomorrow!\nThank you.\n`)
]


//Question16:
console.log(`GOOD NEWS! \nwe find 3 more tables for party.\n`)
guest_list.unshift(`Aqsa`)
guest_list.splice(3,0,`Shamsa`)
guest_list.push(`Aisha`)
for(let i=0; i<guest_list.length ; i++)[
console.log(`Respected Maam ${guest_list[i]},\nIt is our pleasure to invite you in party.\n\nThank you.\n\n`)
]


//Question17:
console.log(`\nunFortunately we cannot arrange big table, having a capacity for only two.`)
while(guest_list.length>2){
    let remove_guest = guest_list.pop()
    console.log(`Sorry Maam ${remove_guest} , You are not invited for dinner.`)
}
for(let i=0; i<guest_list.length ; i++)[
    console.log("Respected Maam " + guest_list[i],`,\nIt is our pleasure to invite you in party.\n\nThank you.\n`)
    ]
