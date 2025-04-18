"use strict";
//define decorators como GET, POST, DELETE, ETC..
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
require("reflect-metadata");
//decorators para rotas GET
function get(path) {
    return function (target, key, desc) {
        //define o metadado 'path' para o método decorado
        Reflect.defineMetadata('path', path, target, key);
    };
}
