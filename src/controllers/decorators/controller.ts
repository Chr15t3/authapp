
import 'reflect-metadata'
import { AppRouter } from "../../AppRouter";



export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance()

    const prototype = target.prototype

    for (let key of Object.getOwnPropertyNames(prototype)) {
      const routeHandler = prototype[key]

      const path: string = Reflect.getMetadata('path', prototype, key)

      if (path) {
        console.log(`Registrando rota GET ${routePrefix}${path}`)
        router.get(`${routePrefix}${path}`, routeHandler)
      }
    }
  }
}
