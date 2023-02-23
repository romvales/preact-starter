#!/usr/bin/env bash

NODE_RUNTIME='node -r @swc-node/register'
GO_APIDIR='./src/server/api'
WORKDIR=$(pwd)

function main {
  local verb=$1

  case $verb in
  install)
    npm i --force --legacy-peer-deps

    ;;
  dev)
    NODE_ENV=development \
    $NODE_RUNTIME node_modules/.bin/webpack --config ./webpack/ssr.ts && \
    $NODE_RUNTIME node_modules/.bin/nodemon --watch './dist/server*.js' --ignore '*.js.map' dist/server.js

    ;;
  build)
    NODE_ENV=production \
    $NODE_RUNTIME node_modules/.bin/webpack --config ./webpack/ssr.ts && \
    $NODE_RUNTIME node_modules/.bin/webpack --config ./webpack/build.ts

    ;;
  serve)
    NODE_ENV=production \
    node ./dist/server.*.js

    ;;
  test)
    NODE_ENV=development \
    $NODE_RUNTIME node_modules/.bin/jest

    ;;
  *)
  
    ;;
  esac
}

main "$@"
