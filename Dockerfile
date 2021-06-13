FROM node:14 as node
# La imagén en la que se basará
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /app/dist/platzi-store /usr/share/nginx/html

#1.- docker build . -t platzi-store:latest
#2.- docker run -d -p 80:80 platzi-store:latest
