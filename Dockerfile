FROM node:15 AS builder
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
WORKDIR /
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm prune --production
RUN /usr/local/bin/node-prune

FROM node:15-alpine
WORKDIR /usr/src/app
COPY --from=builder . .
EXPOSE 3001
CMD [ "npm", "start" ]