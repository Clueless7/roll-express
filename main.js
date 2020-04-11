const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.redirect('http://youtube.com/watch?v=dQw4w9WgXcQ');
});

app.listen(process.env.PORT || 3000);
