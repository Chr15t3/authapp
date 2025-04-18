import 'reflect-metadata' //Habilita o uso de metadados reflect
import express from 'express'

export const router = express.Router()

//decorator de classe que recebe um prefixo de rota
export function controller(routePrefix: string){
  return function(target: Function){

    //itera sobre os métodos do prototype da classe
    for(let key in target.prototype){
      const routeHandler = target.prototype[key]

    //recupera o metadado 'path' do método
      const path = Reflect.getMetadata('path', target.prototype, key)
      
      if (path){
        router.get(`${routePrefix}${path}`, routeHandler)
      }
    }
  }
}