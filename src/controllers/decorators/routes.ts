
import 'reflect-metadata'
import { Methods } from "./Methods";

// Decorador para métodos GET
function routeBinder(method: string){ //Retorna um Decorator Fábrica
 return function get(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key) // Isso está correto.
    Reflect.defineMetadata('method', method, target, key)
    }
  }
}


export const get = routeBinder(Methods.get)
export const put = routeBinder(Methods.put)
export const post = routeBinder(Methods.post)
export const del = routeBinder(Methods.del)
export const patch = routeBinder(Methods.patch)
