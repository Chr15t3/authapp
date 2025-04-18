"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
exports.controller = controller;
// controller.ts
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
function controller(routePrefix) {
    return function (target) {
        const prototype = target.prototype;
        for (let key of Object.getOwnPropertyNames(prototype)) {
            const routeHandler = prototype[key];
            const path = Reflect.getMetadata('path', prototype, key);
            if (path) {
                console.log(`Registrando rota GET ${routePrefix}${path}`);
                exports.router.get(`${routePrefix}${path}`, routeHandler);
            }
        }
    };
}
