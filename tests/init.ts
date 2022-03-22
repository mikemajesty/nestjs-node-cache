jest.setTimeout(2000)

jest.mock('node-cache', () =>
  jest.fn(
    () =>
    ({
      get: () => true,
      del: () => true,
      set: () => true,
      connect: () => true,
      has: () => true,
      ttl: () => true,
      mget: () => true,
      mset: () => true,
    } as any)
  )
)
