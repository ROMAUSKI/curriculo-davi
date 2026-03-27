FROM node:20-slim AS base
RUN npm install -g pnpm
WORKDIR /app

# Copia todos os arquivos do seu projeto para dentro do container
COPY . .

# Instala as dependências e faz o build
RUN pnpm install
RUN pnpm build

# Configura a porta do seu Express
ENV PORT=3000
EXPOSE 3000

# Inicia o servidor Node.js
CMD ["node", "dist/index.js"]
