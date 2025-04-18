"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
exports.controller = controller;
require("reflect-metadata"); //Habilita o uso de metadados reflect
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
//decorator de classe que recebe um prefixo de rota
function controller(routePrefix) {
    return function (target) {
        //itera sobre os métodos do prototype da classe
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            //recupera o metadado 'path' do método
            const path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                exports.router.get(`${routePrefix}${path}`, routeHandler);
            }
        }
    };
}
