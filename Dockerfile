FROM node:lts-alpine as app

ENV APP=/app
ENV BUN_INSTALL=/.bun
ENV PATH=${BUN_INSTALL}/bin:$PATH

WORKDIR ${APP}
COPY . ${APP}

RUN npm install --force

CMD [ "npm", "start" ]
