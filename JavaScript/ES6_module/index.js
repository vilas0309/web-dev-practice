//ES6 module : An external JavaScript file that exports functions, objects, or primitive values from the module so they can be used by other programs with the import statement.

import {PI,getCircumference,getArea,getVolume} from './MathUtils.js';

console.log(`Value of PI: ${PI}`);
console.log(`Circumference of circle with radius 5: ${getCircumference(5).toFixed(2)}`);
console.log(`Area of circle with radius 5: ${getArea(5).toFixed(2)}`);
console.log(`Volume of sphere with radius 5: ${getVolume(5).toFixed(2)}`);