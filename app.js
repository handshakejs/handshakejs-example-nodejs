var express = require('express');
var app     = express();
var PORT    = process.env.PORT || 3000; 

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'secret_stuff. you should change this value.'}));

app.get('/', function(req, res) {
  res.render('index.jade', {session: req.session});
});

app.get('/logout', function(req, res) {
  req.session.user = null;
  res.redirect('/dashboard');
});

app.get('/dashboard', function(req, res) {
  if (!req.session.user) {
    res.redirect('/');
  } else {
    res.render('dashboard.jade', {session: req.session});
  }
});

app.post('/login/success', function(req, res) {
  req.session.user = req.body.email;
  res.redirect('/dashboard');
});

app.listen(PORT);
console.log('Listening on port '+PORT);
