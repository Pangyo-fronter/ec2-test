//https://velog.io/@taelee/react-build%ED%95%9C-%EC%A0%95%EC%A0%81%ED%8C%8C%EC%9D%BC%EB%93%A4-express%EC%97%90-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0
const express = require('express');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + '/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5000;

app.listen(port, () => {
  console.log(`APP IS RUNNING ON ${port} PORT...`);
  console.log(path.join(__dirname, 'build', 'index.html'));
});

app.get('/test', (req, res) => {
  res.json({greeting: 'hello'});
});

app.post('/test', (req, res) => {
  res.json({greeting: req.body.greeting});
})