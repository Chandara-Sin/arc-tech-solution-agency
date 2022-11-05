FROM node:16.18.0-bullseye-slim as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --check-file

COPY . .
RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
