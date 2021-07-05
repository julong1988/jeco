# README #
![npm](https://img.shields.io/npm/v/jeco)
![node](https://img.shields.io/node/v/jeco)
![downloads](https://img.shields.io/npm/dw/jeco)
![license](https://img.shields.io/npm/l/jeco)

![webpack](https://img.shields.io/npm/dependency-version/jeco/webpack)
![react](https://img.shields.io/npm/dependency-version/jeco/react)
![eslint](https://img.shields.io/npm/dependency-version/jeco/eslint)
![esbuild](https://img.shields.io/npm/dependency-version/jeco/esbuild)
![esbuild-loader](https://img.shields.io/npm/dependency-version/jeco/esbuild-loader)
![typescript](https://img.shields.io/npm/dependency-version/jeco/typescript)

react base runtime ecosystem

# ❕Experimental project（Comming soon 2.0）

## Guide

### Installation
```sh
## step1 install to global
npm install -g jeco
## step2 make project folder
mkdir react-app && cd react-app
## step3 init project
jr init
```



## Options

### Custom Setting(<root>/project.config.json)
```js
{
  "entry": "./src/index.tsx",
  "port": "8080",
  "title": "Page title",
  "template": "./src/app.html",
  "eslintConfigPath": "./.eslintrc.json",
   "micro": {
    "projectId": "pj01",
    "isRuntimeAssets": true,
    "publicPath": {
      "local": "http://localhost:8080/",
      "dev": "http://localhost:8080/"
    }
  }
}
}
```

| Property         | Description             | Default                                | Required |
| ---------------- | ----------------------- | -------------------------------------- | -------- |
| entry            | project entry file path | <Root>/container/index.tsx (only read) | false    |
| port             | devServer port          | 8080                                   | false    |
| title            | pageTitle               | Page Title                             | false    |
| template         | html base file path     | <Root>/container/app.html (only read)  | false    |
| eslintConfigPath | custom eslint config    | <Root>/.eslintrc.json (only read)      | false    |

#### src/index.html (sample)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
<div id="app"></div>
</body>
</html>
```

#### src/index.tsx (sample)
```tsx
import React from 'react';
import { render } from 'react-dom';

render(<>Hello world</>, document.getElementById('app'));
```



## create page (default entry)

- Insert file(js,jsx,ts,tsx) to './src/pages' folder
- auto mapping to router

## env

1. sub project create '.env.prod' file

   ```
   DB_HOST=127.0.0.11
   DB_PASS=dafjlkdajs2
   S3_API=mysecretkey
   ```

2. script run

   ```
   jr dev|start|build -e prod(.env.prod)
   ```

3. use to component

   ```jsx
   <div>DBHOST: {process.env.DB_HOST}</div>
   ```

   

## script

```sh
## dev mode
jr dev, jr start

## build mode(production)
jr build

## lint
jr lint

## fix
jr fix

## test
jr test

## analyz
jr analyz
```



## use style

css(not support modules), less, sass, scss, stylus
```js
// sample
import s from './style.stylus';

const App = () => <div className={s.style}></div>
```



## webpack build time check(DEV)

```sh
# add
export SMP='smp'
# remove
export SMP=''
```
