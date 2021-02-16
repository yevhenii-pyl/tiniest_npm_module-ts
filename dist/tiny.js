"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiny = void 0;
function tiny(someString) {
    if (typeof someString !== "string")
        throw new TypeError("Tiny wants a string!");
    return someString.replace(/\s/g, "");
}
exports.tiny = tiny;
;
