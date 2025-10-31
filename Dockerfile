FROM node:lts-buster
RUN git clone https://github.com/JawadYT36/KHAN-MD/root/djJawadx
WORKDIR /root/djJawadx
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]

