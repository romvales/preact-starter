#!/usr/bin/env bash

NODE_RUNTIME='node -r @swc-node/register'
GO_APIDIR='./src/server/api'
WORKDIR=$(pwd)

function main {
  local verb=$1

  case $verb in
  dev)
    NODE_ENV=development \
    $NODE_RUNTIME node_modules/.bin/webpack --config ./webpack/ssr.ts && \
    $NODE_RUNTIME node_modules/.bin/nodemon --watch './dist/server*.js' --ignore '*.js.map' dist/server.js
    ;;
  build)
    NODE_ENV=production \
    $NODE_RUNTIME node_modules/.bin/webpack --config ./webpack/ssr.ts && \
    $NODE_RUNTIME node_modules/.bin/webpack --config ./webpack/build.ts

    mkdir ./dist/api
    cp $GO_APIDIR/*.go -r ./dist/api
    cp $GO_APIDIR/go* -r ./dist/api
    ;;
  serve)
    NODE_ENV=production \
    node ./dist/server.*.js &

    ./dist/api/app
    read
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
