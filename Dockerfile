FROM node:10.16.3-alpine as build

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app

RUN npm run build

FROM nginx
EXPOSE 80
RUN rm /etc/nginx/conf.d/default.conf 
# Copy the updated conf file:
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist/devchallenge-app/* /usr/share/nginx/html/