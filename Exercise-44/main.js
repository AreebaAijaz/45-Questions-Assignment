//Question43
function makeSandwich(item) {
    console.log("\nMaking your sandwich with:");
    item.forEach(function (element) { return console.log("-" + element); });
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(["Peanut butter", "Cheese", "Blackpepper"]);
makeSandwich([" Egg", "Lettuce", "Bread"]);
makeSandwich([" Soysauce", "cabbage", "Capsicum"]);
