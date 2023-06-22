FROM node:20.3.1-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

CMD ["npm", "run", "dev"]