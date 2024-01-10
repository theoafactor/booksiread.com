FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


## The Second build stage
FROM node:18-alpine AS PROD_BUILD

WORKDIR /home/app


COPY --from=BUILD_IMAGE /home/app/build/ /home/app/build/

COPY package.json .

COPY .env .

RUN npm install -g serve 


CMD ["serve", "-s", "build"]