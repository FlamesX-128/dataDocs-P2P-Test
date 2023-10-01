esbuild mod.ts --bundle --minify --platform=browser --target=es2016 --outfile=dist/browser.js
esbuild mod.ts --bundle --minify --platform=browser --target=esnext --outfile=dist/deno.js
esbuild mod.ts --bundle --minify --platform=node --target=node18 --outfile=dist/node.js
