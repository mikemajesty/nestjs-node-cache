import { Test } from '@nestjs/testing'
import { ICacheService } from '../adpater'
import { CacheModule } from '../module'
import { CacheService } from '../service'

describe('CacheService', () => {
  let service: ICacheService

  beforeEach(async () => {
    const app = await Test.createTestingModule({imports: [CacheModule] }).compile()

    service = app.get(ICacheService)
  })

  describe('connect', () => {
    test('should connect successfully', () => {
      expect(service.connect()).toBeInstanceOf(CacheService)
    })
  })

  describe('del', () => {
    test('should del successfully', () => {
      expect(service.del('dummyKey')).toEqual(true)
    })
  })

  describe('get', () => {
    test('should get successfully', () => {
      expect(service.get('dummyKey')).toEqual(true)
    })
  })

  describe('set', () => {
    test('should set successfully', () => {
      expect(service.set('dummyKey', {})).toEqual(true)
    })
  })

  describe('has', () => {
    test('should has successfully', () => {
      expect(service.has('dummykey')).toEqual(true)
    })
  })

  describe('mGet', () => {
    test('should mGet successfully', () => {
      expect(service.mGet(['dummykey'])).toEqual(true)
    })
  })

  describe('mSet', () => {
    test('should mSet successfully', () => {
      expect(service.mSet([{ key: 'keyDummy', val: {}, ttl: 60 }])).toEqual(true)
    })
  })

  describe('setExpiration', () => {
    test('should setExpiration successfully', () => {
      expect(service.setExpiration('keyDummy', 60)).toEqual(true)
    })
  })

  describe('setOptions', () => {
    test('should setOptions successfully', () => {
      service.setOptions({ stdTTL: 10000 })
      expect(service.nodeCache.options.stdTTL).toEqual(10000)
    })
  })
})
