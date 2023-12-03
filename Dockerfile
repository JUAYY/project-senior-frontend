# Use an official Node.js runtime as a parent image
FROM node:18 as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Quasar CLI globally
RUN npm install -g @quasar/cli

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the Quasar SPA
RUN quasar build

# Create a lightweight production image
FROM node:18 as production-stage

# Set the working directory in the container
WORKDIR /app

# Copy the built Quasar SPA files from the build-stage image
COPY --from=build-stage /app/dist/spa /app

# Install the 'serve' package globally
RUN npm install -g serve

# Expose port 8080
EXPOSE 8080

# Start the Quasar SPA using 'serve' on port 8080
CMD ["serve", "-s", ".", "-l", "8080"]
