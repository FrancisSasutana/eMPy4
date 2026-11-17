FROM node:24
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . . 

EXPOSE 2600

CMD ["npm", "run", "start"]