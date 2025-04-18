//define decorators como GET, POST, DELETE, ETC..

import 'reflect-metadata'

//decorators para rotas GET
export function get(path: string) {
  return function (target: any, key: string, desc:PropertyDescriptor){
    
    //define o metadado 'path' para o método decorado
    Reflect.defineMetadata('path', path, target, key)
  }
}