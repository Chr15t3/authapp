"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = controller;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const MetadataKeys_1 = require("./MetadataKeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send("Invalid Request");
            return;
        }
        for (let key of keys) {
            if (!req.body[key]) {
                res.status(422).send(`Missing property ${key}`);
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        const router = AppRouter_1.AppRouter.getInstance();
        const prototype = target.prototype;
        for (let key of Object.getOwnPropertyNames(prototype)) {
            const routeHandler = prototype[key];
            const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, prototype, key);
            const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, prototype, key) || [];
            const validator = bodyValidators(requiredBodyProps);
            if (path) {
                console.log(`Registrando rota GET ${routePrefix}${path}`);
                router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        }
    };
}
