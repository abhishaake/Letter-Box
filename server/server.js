// *SERVER
const express = require('express');
const path = require('path');
const cors = require("cors");

require('dotenv').config();

const connectDB = require('./config/mongoDB');
connectDB();
const index = require('./models/index.js');

const app = express();
app.use(
  cors({
    origin: ["https://letterbox-dev.netlify.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json({ extended: false }));

app.use('/api/feed', require('./routes/common'));
app.use('/api/user', require('./routes/login'));


if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));