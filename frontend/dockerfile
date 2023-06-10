FROM node:alpine
RUN mkdir -p /home/frontend
COPY . /home/frontend
WORKDIR /home/frontend
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]