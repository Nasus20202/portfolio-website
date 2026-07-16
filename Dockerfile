# Stage 1: Build the Astro static site
FROM node:24.18.0-alpine AS builder
# Enable corepack for pnpm
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN corepack install
ENV CI=true
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Stage 2: Serve with Nginx unprivileged
FROM nginxinc/nginx-unprivileged:1.31.3-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built files from the builder stage
COPY --from=builder /app/dist /app
EXPOSE 8080
