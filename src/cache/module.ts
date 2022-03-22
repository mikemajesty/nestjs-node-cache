import { Module } from '@nestjs/common'

import { ICacheService } from './adpater'
import { CacheService } from './service'

@Module({
  providers: [
    {
      provide: ICacheService,
      useFactory: () => new CacheService().connect(),
    },
  ],
  exports: [ICacheService],
})
export class CacheModule {}
