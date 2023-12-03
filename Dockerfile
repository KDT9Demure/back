# Stage 1: Build NestJS App
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Stage 2: Run the App with a smaller image
FROM node:18-alpine

WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["npm", "run", "start:prod"]
