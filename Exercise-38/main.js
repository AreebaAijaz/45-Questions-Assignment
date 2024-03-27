function describe_city(name_of_city, country) {
    if (country === void 0) { country = "Default Country."; }
    console.log("".concat(name_of_city, " is in ").concat(country));
}
describe_city("Karachi", "Pakistan");
describe_city();
describe_city("NewYork", "United States");
