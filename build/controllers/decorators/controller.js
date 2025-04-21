"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = controller;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
function controller(routePrefix) {
    return function (target) {
        const router = AppRouter_1.AppRouter.getInstance();
        const prototype = target.prototype;
        for (let key of Object.getOwnPropertyNames(prototype)) {
            const routeHandler = prototype[key];
            const path = Reflect.getMetadata('path', prototype, key);
            const method = Reflect.getMetadata('method', prototype, key);
            if (path) {
                console.log(`Registrando rota GET ${routePrefix}${path}`);
                router[method](`${routePrefix}${path}`, routeHandler);
            }
        }
    };
}
