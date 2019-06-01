
// 模块体系
// While import is indeed part of ES6, it is unfortunately not yet supported in NodeJS by default, and has only very recently landed support in browsers.


// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;

// ES6 模块
import { stat, exists, readFile } from 'fs';




import { firstName, lastName, year, v1f, v2 } from './module_profile.js';

v1f()



// 下面代码的两组写法，第一组是使用export default时，对应的import语句不需要使用大括号；第二组是不使用export default时，对应的import语句需要使用大括号。

// 第一组
export default function crc32() { // 输出
    // ...
}

import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
    // ...
};

import {crc32} from 'crc32'; // 输入


// 跨模块常量

// constants.js 模块
export const A = 1;
export const B = 3;
export const C = 4;

// test1.js 模块
import * as constants from './constants';
console.log(constants.A); // 1
console.log(constants.B); // 3

// test2.js 模块
import {A, B} from './constants';
console.log(A); // 1
console.log(B); // 3
