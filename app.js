const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // console.log(request);
  // console.log(response);

  // res.end('<h1>hello from express</h1>');
  res.send('<h1>hello from express</h1>');
});
// app.post();
// app.put();
// app.patch();
// app.delete();

app.get('*', (req, res) => {
  res.send(`path is ${req.path} and method is ${req.method}`);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
