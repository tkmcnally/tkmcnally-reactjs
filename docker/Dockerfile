FROM node:16
ENV NODE_ENV=production

RUN groupmod -g ${GROUP_ID} node \
  && usermod -u ${USER_ID} -g ${GROUP_ID} node

# Create app directory
WORKDIR /usr/src/app

# Copy all application resources to container.
COPY . .

# Install global dependencies.
RUN npm -g install serve

# Install applicaton dependencies.
RUN npm install --production

# Compile static files.
RUN npm run build

# Serve /usr/src/app on port 3001.
CMD [ "serve", "-s", "build", "-l", "3001" ]