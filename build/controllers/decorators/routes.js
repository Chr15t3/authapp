"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
// Decorador para métodos GET
function routeBinder(method) {
    return function get(path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key); // Isso está correto.
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.put = routeBinder(Methods_1.Methods.put);
exports.post = routeBinder(Methods_1.Methods.post);
exports.del = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
