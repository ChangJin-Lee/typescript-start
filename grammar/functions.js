"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "Hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) { };
addTwo(5);
console.log(getUpper("cj"));
signUpUser("cj", "test@test.com", false);
loginUser("cj", "nost@nost.com", false);
// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var friends = ["a", "b", "c"];
// const friends = [1,2,3]
console.log(friends.map(function (friend) {
    return "my friend is ".concat(friend);
}));
