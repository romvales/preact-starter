#!/usr/bin/env sh

NODE_RUNTIME='node -r @swc-node/register'

function main {
  local verb=$1

  case $verb in
  dev)
    NODE_ENV=development \
    $NODE_RUNTIME src/server/index.ts
    ;;
  build)
    NODE_ENV=production \
    $NODE_RUNTIME node_modules/.bin/webpack --config ./webpack/build.ts
    ;;
  serve)
    NODE_ENV=development \
    $NODE_RUNTIME 
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