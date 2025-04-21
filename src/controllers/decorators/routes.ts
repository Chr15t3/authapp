
import 'reflect-metadata'

// Decorador para métodos GET
function routeBinder(method: string){ //Retorna um Decorator Fábrica
 return function get(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key) // Isso está correto.
    Reflect.defineMetadata('method', method, target, key)
    }
  }
}


export const get = routeBinder('get')
export const put = routeBinder('put')
export const post = routeBinder('post')
export const del = routeBinder('get')
export const patch = routeBinder('patch')
