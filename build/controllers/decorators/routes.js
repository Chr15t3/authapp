"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
require("reflect-metadata");
// Decorador para métodos GET
function get(path) {
    return function (target, key, descriptor) {
        Reflect.defineMetadata('path', path, target, key); // Isso está correto.
    };
}
