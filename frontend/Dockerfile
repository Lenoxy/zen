FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM pierrezemb/gostatic
COPY --from=build /app/dist/zen /srv/http
