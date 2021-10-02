FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install global dependencies.
RUN npm -g install serve

# Copy application manifest to container.
COPY package.json .

# Install applicaton dependencies.
RUN npm install

# Copy all application resources to container.
COPY . .

# Build static files
RUN npm run build

# Serve /usr/src/app on port 3001.
CMD [ "serve", "-s", "build", "-l", "3001" ]