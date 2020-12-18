 FROM node:latest

 RUN mkdir -p /app
 WORKDIR /app
 #/usr/src/app
 cOPY package.json /app
 RUN npm install

 COPY . /app

 EXPOSE 5000

 ENTRYPOINT ["node"]

 CMD ["app.js"]