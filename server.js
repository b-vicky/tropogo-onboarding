// For server deployment on Heroku

const express = require('express');

const app = express();

app.use(express.static('./dist/tropogo-onboarding'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/tropogo-onboarding/' }),
);

app.listen(process.env.PORT || 8080);
