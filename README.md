# Nestjs Node Cache

```bash
$ npm i nestjs-node-cache
```

## Usage

---
```ts
    import { CacheModule } from 'nestjs-node-cache';

    @Module({
      imports: [CacheModule],
      providers: [],
      exports: [],
    })
    export class YourModule {}
```

```ts
  import { ICacheService } from 'nestjs-node-cache'
  
  @Injectable()
  export class YourService {
    constructor(private readonly cacheService: ICacheService) {}

      async method(): string {
        this.cacheService.set('KEY', 'textCached');

        return this.cacheService.get('KEY')
      }
  }
```

# operators

```ts
  nodeCache: NodeCache
  connect(config?: NodeCache.Options): CacheService
  set(key: string | number, model: unknown): boolean
  mSet(model: CacheType[]): boolean
  mGet(key: string[]): unknown | null
  has(key: string | number): boolean
  del(key: string | number): boolean
  get(key: string | number): unknown
  setExpiration(key: string | number, ttl: number): boolean
  setOptions(options: NodeCache.Options): void
```

---

The following is a list of all the people that have contributed to nestjs-node-cache. Thanks for your contributions!

[<img alt="mikemajesty" src="https://avatars1.githubusercontent.com/u/11630212?s=460&v=4&s=117" width="117">](https://github.com/mikemajesty)

## License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
