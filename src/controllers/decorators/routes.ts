//AQUI IREMOS DEFINIR TODOS OS DIFERENTES DECORATORS
//GET, POST, DELETE, E QUALQUER OUTRO

import 'reflect-metadata'

export function get(path: string) {
  return function (target: any, key: string, desc:PropertyDescriptor){
    Reflect.defineMetadata('path', path, target, key)
  }
}