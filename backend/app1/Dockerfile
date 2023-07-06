FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production

# Bundle app source
COPY . .

#I use the port 3000 to expose the backend app and the port 5000 for the frontend app
#You can use the ports that you want
EXPOSE 3000 

CMD [ "npm", "run", "prod" ]