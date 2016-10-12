FROM node:6

WORKDIR /app

RUN npm install --quiet -g yarn

# for long-term faster build time
COPY .package.json /app/package.json
RUN yarn

COPY package.json /app/package.json
RUN yarn

COPY . /app

ENV NODE_ENV production

EXPOSE 4000 5000

CMD npm start
