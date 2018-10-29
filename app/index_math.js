// console.log('App working: open app/index.js to start exploring ES6');


import * as math from './math'

import {addToDom as atd} from './helpers';

console.log('Math:', math)


atd('h1',`23+67 = ${math.add(23, 67)}`);

atd('h1', `56 -14 = ${math.subtract(56, 14)}`);

atd('h1', `21 /7 = ${math.divide(21, 7)}`);

atd('h1', `25 x 5 = ${math.multiply(25, 5)}`);




 