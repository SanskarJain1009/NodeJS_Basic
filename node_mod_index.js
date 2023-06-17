console.log("This is a module_index");
const mod1=require("./node_mod");
console.log(mod1([2,5,8]));
console.log("");
const mod2=require("./node_mod_2");
console.log(mod2.name);
add=mod2.sum([1,2,3,4,5]);
console.log(add);