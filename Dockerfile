FROM node:lts-alpine

WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH

COPY /frontend/ .

RUN npm install
RUN npm install -g vite

EXPOSE 5173

CMD [ "npm", "run", "dev" ]