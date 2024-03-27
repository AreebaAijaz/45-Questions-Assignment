//Question37
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love typescript."; }
    console.log("Creating a ".concat(size, " shirt having message:").concat(text));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "Birthday boy");
