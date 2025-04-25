
import 'reflect-metadata'
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { Request, Response, NextFunction, RequestHandler } from 'express';

function bodyValidators(keys: string): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {
      if(!req.body){
        res.status(422).send("Invalid Request")
        return;
      }

      for (let key of keys){
      if (!req.body[key]){
        res.status(422).send(`Missing property ${key}`)
        return;

      }
    }

    next()
  }
}


export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance()

    const prototype = target.prototype

    for (let key of Object.getOwnPropertyNames(prototype)) {
      const routeHandler = prototype[key]

      const path: string = Reflect.getMetadata(MetadataKeys.path, prototype, key)
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, prototype, key)
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, prototype, key) || []
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, prototype, key) || []
      const validator = bodyValidators(requiredBodyProps)


      if (path) {
        console.log(`Registrando rota GET ${routePrefix}${path}`)
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler)
      }
    }
  }
}
