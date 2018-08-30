FROM node:8.11.4-alpine

ENV NODE_ENV=production
EXPOSE 3000

COPY . .

RUN yarn
RUN yarn build
CMD ["yarn", "start"]
