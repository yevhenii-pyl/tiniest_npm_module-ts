# yev.pyl/tiny_package-ts

![npm](https://img.shields.io/npm/v/@yev.pyl/tiny_package-ts)

It's the tiniest module I can imagine. Works like an ES module. Now using TypeScript. 

import {tiny} from "@yev.pyl/tiny_package-ts"

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
