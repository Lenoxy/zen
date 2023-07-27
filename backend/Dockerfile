FROM node:18-alpine AS build
COPY package.json package.json
RUN npm install

COPY index.js index.js
EXPOSE 3000
CMD ["node", "index.js", "--prod"]
