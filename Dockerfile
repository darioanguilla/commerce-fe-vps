# pull official base image
FROM node:lts-alpine3.14

# set working directory
WORKDIR /commerce-fe

# add `/app/node_modules/.bin` to $PATH
ENV PATH /commerce-fe/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
# add app
COPY . ./

# start app
CMD ["npm", "start"]
