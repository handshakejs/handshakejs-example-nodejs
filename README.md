# handshake-example-nodejs 

Example of using [handshake-js](https://github.com/scottmotte/handshake-js) with a nodejs express app.

You can view it in action [here](http://handshake-example-nodejs.herokuapp.com/).

## Usage

```bash
git clone https://github.com/scottmotte/handshake-example-nodejs.git
cd handshake-example-nodejs
npm install 
node app.js
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## We're going to need to see some ID

Requiring the user to be logged in prior to gaining access to your routes is easy.
Open your app.js file and create new routes like this:

```bash
app.get('/rainbows', authenticate, function(req, res) {
	res.render('rainbows.jade');
})
```

This will call authenticate() prior to continue to render your view, making sure the user is logged in, or else they'll get redirected to /login 

## Deploying to Heroku

```bash
git clone https://github.com/scottmotte/handshake-example-nodejs.git
cd handshake-example-nodejs
heroku create
git push heroku master
```
