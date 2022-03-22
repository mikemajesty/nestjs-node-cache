import NodeCache from 'node-cache'

import { CacheService } from './service'

export type CacheType = {
  key: string
  val: unknown
  ttl?: number
}

export abstract class ICacheService {
  abstract nodeCache: NodeCache
  abstract connect(config?: NodeCache.Options): CacheService
  abstract set(key: string | number, model: unknown): boolean
  abstract mSet(model: CacheType[]): boolean
  abstract mGet(key: string[]): unknown | null
  abstract has(key: string | number): boolean
  abstract del(key: string | number): boolean
  abstract get(key: string | number): unknown
  abstract setExpiration(key: string | number, ttl: number): boolean
  abstract setOptions(options: NodeCache.Options): void
}
