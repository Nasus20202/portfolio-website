FROM node:24.15-alpine AS builder

WORKDIR /build

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.30.0-alpine AS runner

WORKDIR /app

COPY --from=builder /build/build/ .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
