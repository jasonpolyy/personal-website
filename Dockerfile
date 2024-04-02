# use node v16.16.0 
FROM node:16.16.0-alpine

# we'll work from the /app directory
WORKDIR /app

# copy packages to install
COPY package.json package-lock.json ./

# install our packages first
RUN npm install

# Copy the rest of the project
COPY . .

# Build the project in the container
RUN npm run build
