# Vue.js 2系のサンプルアプリケーション

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## JSON Server

Fake REST API server.

### install
```bash
npm i -g json-server
```

### Run server

```bash
json-server --watch db.json

## 読み込みを2秒遅延
json-server --watch db.json --delay 2000
```

> https://github.com/typicode/json-server