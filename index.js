var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');
const port = 8886;
var corsOrigin = `http://localhost:${port}`;
var corsOptions = {origin: corsOrigin};

var app = express();


app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret ,
  saveUninitialized: true,
  resave: false,
  //cookie: {secure: true}
}));
app.use(express.static('public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getProfiles);
