const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const port           = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
require('./app/routes')(app);
app.listen(port, () => {
  //Start with npm run dev
  console.log('We are live on lol ' + port);
});
