FROM node:22-bullseye 

WORKDIR /app/

RUN npm install -g pnpm

COPY ./package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false 

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
