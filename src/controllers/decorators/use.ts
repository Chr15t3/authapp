import 'reflect-metadata'
import { RequestHandler } from "express";
import { MetadataKeys } from "./MetadataKeys";

export function use(middleware: RequestHandler){
    return function (target: any, key: string, descriptor: PropertyDescriptor){
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || []

      middlewares.push(middleware)
      Reflect.defineMetadata
      (MetadataKeys.middleware, middlewares, target, key)

    }
  }
