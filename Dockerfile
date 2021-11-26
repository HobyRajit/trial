From node:8.10.0
Run mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY server.js /usr/src/app
COPY dist /usr/src/app
COPY package-container.json /usr/src/app
RUN mv package-container.json package.json
RUN npm install express --save
RUN npm install path --save 
expose 4200
CMD ["node","server.js"]
