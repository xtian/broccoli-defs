"use strict";
function fn() {
    const y = 0;
    for (let x = 0; x < 10; x++) {
        const y = x * 2;
        const z = y;
    }
    console.log(y); // prints 0
}
fn();
