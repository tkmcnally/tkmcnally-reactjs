FROM node:16
ENV NODE_ENV=production
USER root

# Create app directory
WORKDIR /usr/src/app

# Install global dependencies.
RUN npm -g install serve

# Copy application manifest to container.
COPY ["package.json", "package-lock.json*", "./"]

# Install applicaton dependencies.
RUN npm install --production

# Copy all application resources to container.
COPY . .

# Serve /usr/src/app on port 3001.
CMD [ "serve", "-s", "build", "-l", "3001" ]