# Stage 1: Build the Backend App
FROM node:18-alpine AS build

WORKDIR /app

COPY .env /app/.env
COPY package*.json ./

RUN npm install

COPY . .

# Build the TypeScript code
RUN npm run build


# Stage 2: Run the Backend App in an Nginx Image
FROM nginx:alpine

COPY . .
# Copy the Nginx configuration for the backend
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files from the build stage


EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
