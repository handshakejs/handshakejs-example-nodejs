# handshake-example-nodejs 

Example of using [handshake-js](https://github.com/scottmotte/handshake-js) with a nodejs express app.

You can view it in action [here](http://handshake-example-nodejs.herokuapp.com/).

## Usage

```bash
git clone https://github.com/scottmotte/handshake-example-nodejs.git
cd handshake-example-nodejs
echo "SALT=ddb5cf1ae20b5bb1a176dbb634f2031644f6365cf95accc637dd455acb9bbafb" > .env
npm install 
node app.js
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to Heroku

```bash
git clone https://github.com/scottmotte/handshake-example-nodejs.git
cd handshake-example-nodejs
heroku create
heroku config:set SALT=ddb5cf1ae20b5bb1a176dbb634f2031644f6365cf95accc637dd455acb9bbafb
git push heroku master
```
