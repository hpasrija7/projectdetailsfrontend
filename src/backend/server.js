const express = require('express');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 3000;
const jsonData = require('./projectdata.json'); 

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3001', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); 

app.get('/api/items', (req, res) => {
  res.json(jsonData);
});

app.get('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = jsonData.find((item) => item.id === itemId);

  if (!item) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    res.json(item);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
