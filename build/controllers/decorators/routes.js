"use strict";
//AQUI IREMOS DEFINIR TODOS OS DIFERENTES DECORATORS
//GET, POST, DELETE, E QUALQUER OUTRO
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
require("reflect-metadata");
function get(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata('path', path, target, key);
    };
}
