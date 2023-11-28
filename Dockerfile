FROM node:18-alpine AS Build
RUN mkdir -p /
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm run start:dev
EXPOSE 8000
CMD ["npm","run","start:prod"]