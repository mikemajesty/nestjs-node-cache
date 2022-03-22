import NodeCache from 'node-cache'

import { CacheType, ICacheService } from './adpater'

export class CacheService implements ICacheService {
  nodeCache!: NodeCache;
  connect(config?: NodeCache.Options): CacheService {
    console.log('nodeCache', NodeCache);
    this.nodeCache = new NodeCache(config || { stdTTL: 3600, checkperiod: 3600 })
    return this
  }

  set(key: string, model: unknown): boolean {
    return this.nodeCache.set(key, model)
  }

  mSet(model: CacheType[]): boolean {
    return this.nodeCache.mset(model)
  }

  mGet(key: string[] | number[]): unknown {
    return this.nodeCache.mget(key)
  }

  get(key: string | number): unknown {
    return this.nodeCache.get(key)
  }

  del(key: string | number): boolean {
    return !!this.nodeCache.del(key)
  }

  has(key: string | number): boolean {
    return this.nodeCache.has(key)
  }

  setExpiration(key: string | number, ttl: number): boolean {
    return this.nodeCache.ttl(key, ttl)
  }

  setOptions(options: NodeCache.Options): void {
    this.nodeCache.options = options
  }
}
