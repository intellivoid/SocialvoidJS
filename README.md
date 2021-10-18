# SocialvoidJS

> [Deno](https://deno.land), [Node.js](https://nodejs.org) and browser
> Socialvoid client.

## Introduction

SocialvoidJS is a Deno Socialvoid client which is backported to Node.js using
the tool [`deno2node`](https://github.com/fromdeno/deno2node). Also, it can be
bundled for browsers using the bundle command of Deno or with Webpack.

### Features

- Everything works on Node.js, Deno and browsers
  ([2 ways](#bundling-for-browsers)).
- Multiple ways to store session and other data: MemoryStore, FileStore,
  LocalStorageStore and the ones you define!
- Typings for Socialvoid types.
- Most thrown errors can be used with `instanceof`.
- CDN upload and download support.
- Account, Cloud, Help and Network methods.
- Capability of sending raw requests.

## Bundling for browsers

### Method 1: Deno's bundle command (recommended)

```bash
npm run bundle:deno
```

### Method 2: Webpack

```bash
npm run build
```

## Using with Next.js

SocialvoidJS can be used with Next.js, with the following configuration:

```bash
{
  webpack: (config) => {
    if (typeof config.resolve.fallback !== "undefined") {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
}
```

React.js support is untested, but should work if you can configure Webpack like mentioned in above.

## Examples

See [`examples/`](./examples).
