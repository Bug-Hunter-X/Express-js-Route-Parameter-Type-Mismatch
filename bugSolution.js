const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  // ... some database query to fetch user details based on userId ...
  if (isNaN(userId) || !user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});