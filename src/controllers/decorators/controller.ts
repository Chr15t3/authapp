
import 'reflect-metadata'
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";


export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance()

    const prototype = target.prototype

    for (let key of Object.getOwnPropertyNames(prototype)) {
      const routeHandler = prototype[key]

      const path: string = Reflect.getMetadata(MetadataKeys.path, prototype, key)
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, prototype, key)
      

      if (path) {
        console.log(`Registrando rota GET ${routePrefix}${path}`)
        router[method](`${routePrefix}${path}`, routeHandler)
      }
    }
  }
}
