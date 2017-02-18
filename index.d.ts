declare module 'sw-toolbox' {
  type URLPattern = string | RegExp
  type PrecacheURL = Request | string
  type PrecacheURLs = Promise<PrecacheURL[]> | PrecacheURL[]

  interface Request {
  }
  interface Response {
  }
  interface CacheOptions {
    name: string
    maxEntries: number
    maxAgeSeconds: number
  }
  interface Options {
    debug: boolean
    networkTimeoutSeconds: number
    cache: CacheOptions
  }
  interface Handler {
    (request: Request): Promise<Response>
  }

  interface Router {
    any(urlPattern: URLPattern, handler: Handler, options?: Options): void
    delete(urlPattern: URLPattern, handler: Handler, options?: Options): void
    get(urlPattern: URLPattern, handler: Handler, options?: Options): void
    head(urlPattern: URLPattern, handler: Handler, options?: Options): void
    post(urlPattern: URLPattern, handler: Handler, options?: Options): void
    put(urlPattern: URLPattern, handler: Handler, options?: Options): void
  }

  export const cacheFirst: Handler
  export const cacheOnly: Handler
  export const fastest: Handler
  export const networkFirst: Handler
  export const networkOnly: Handler
  export const router: Router

  export function cache(url: string, options: Options): void

  export function precache(urls: PrecacheURLs): void

  export function uncache(url: string): Promise<void>
}
