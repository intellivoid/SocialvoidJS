# SocialvoidJS

> [Node.js](https://nodejs.org), [Deno](https://deno.land) & browser Socialvoid client.

## Introduction

SocialvoidJS is a Deno Socialvoid client which can be backported to Node.js using the tool `deno2node`. Also, it can be bundled for browsers using the bundle command of Deno and Webpack.

### Features

- Everything works on Node.js, Deno and browsers ([2 ways](#bundling-for-browsers)).
- Multiple ways to store session and other data: MemoryStore, FileStore,
  LocalStorageStore and the ones you define!
- Socialvoid types in classes and applicable for instanceof.
- Most thrown errors can be used with instanceof.
- CDN upload and download support.
- Account, Cloud, Help and Network methods returning actual types.
- Capability of sending raw requests.

## Bundling for browsers

### Method 1: Deno's bundle command (recommended)

```bash
deno bundle socialvoid/mod.ts socialvoid.js
```

### Method 2: Webpack

1. Convert to Node.js:

```bash
npm run build
```

2. Build:

```bash
NODE_ENV=production npx webpack
```

## Examples

See [`examples/`](./examples).
