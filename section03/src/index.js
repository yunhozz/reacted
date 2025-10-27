// const { add, sub } = require("./math");
import multiply, { add, sub } from "./math.js";
import randomColor from "randomcolor";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multiply(2, 3));


const color = randomColor();
console.log(color);