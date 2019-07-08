const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');
//Connect Database
connectDB();

//Init MiddlewARE
//app.use('bosy-parser.json()');  <--- Old Version
app.use(express.json({ extended: false }));
app.use('/uploads', express.static('uploads'));
app.use('/mofmeeting', express.static('mofmeeting'));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/userdata', require('./routes/api/userdata'));
app.use('/api/deouserdata', require('./routes/api/deouserdata'));

app.use(express.static(path.join(__dirname, 'client/build')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server has started on port ${PORT}`));
