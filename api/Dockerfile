# Specify base image
FROM node:alpine

WORKDIR /usr/app

# Copy Files
COPY ./ ./
# Install some dependencies
RUN npm install

# Default Commands
CMD ["npm", "start"]