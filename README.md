# To Reproduce

## 1. Install dependencies

```sh
pnpm install
```

## 2. Run build with Cloudflare pages preset

```sh
npx nuxi build --preset=cloudflare_pages
```

## 3. See the errors on the optional dynamic import

```sh
[nitro 12:13:43 PM]  ERROR  Error: Cannot resolve "@react-email/render" from 
".../nuxt-resend-node-cloudflare/node_modules/.pnpm/resend@6.6.0/node_modules/resend/dist/index.mjs" 
and externals are not allowed!
```

