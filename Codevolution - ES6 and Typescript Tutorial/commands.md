[Scratch JS](https://chrome.google.com/webstore/detail/scratch-js/alploljligeomonipppgaahpkenfnfkn)

```bash
tsc --init
```

```bash 
tsc -w -p .
```

```bash 
npm i -g lite-server
lite-server
```

For lessons 26-29 in tsconfig.json use:
```json
{
    "target": "ESNEXT",
    "module": "amd"
}
```

otherwise

```json
{
    "target": "ES2015",
    "module": "es2015"
}
```