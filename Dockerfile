FROM golang:1.19-alpine as api

WORKDIR /app
COPY . /app/

RUN cd /app/dist/api && go mod tidy && CGO_ENABLED=0 GOOS=linux go build -a -o app .

FROM node:lts-alpine as app

WORKDIR /app
COPY --from=api /app /app

RUN npm install --force

CMD [ "npm", "start" ]
