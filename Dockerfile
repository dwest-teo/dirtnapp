FROM mhart/alpine-node:10

WORKDIR /usr/src
ENV NODE_ENV=production
EXPOSE 3000

COPY package.json yarn.lock ./
RUN yarn
COPY . .

RUN yarn build
RUN yarn start
