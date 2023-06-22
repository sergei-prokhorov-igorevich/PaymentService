# docker build -t backend . 
# docker run -d -p 81:81 -v ./node_modules:/app/node_modules backend

FROM node:alpine
WORKDIR /app

COPY /dist/server.js /app
COPY /dist/fileLogWorker.js /app
COPY /logs /app/logs

COPY package.json /app
COPY package-lock.json /app

CMD ["node", "server.js"]