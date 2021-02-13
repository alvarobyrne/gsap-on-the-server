const gsap = require("gsap");
console.log(gsap);
const keys = Object.keys(gsap);
for (const key in keys) {
    if (Object.hasOwnProperty.call(keys, key)) {
        const element = keys[key];
        // console.log(element)
    }
}
const g =  gsap.gsap;
g.set({x:0},1,{x:1,onUpdate:on_update});
function on_update(params) {
    arguments
    console.log(this)
    
}
