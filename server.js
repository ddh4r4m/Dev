const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');

//Init MiddlewARE
//app.use('bosy-parser.json()');  <--- Old Version

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json({ extended: false }));
//Connect Database
connectDB();

app.use('/uploads', express.static('uploads'));
app.use('/profilepics', express.static('profilepics'));
app.use('/mofmeeting', express.static('mofmeeting'));
app.use('/reference', express.static('reference'));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/userdata', require('./routes/api/userdata'));
app.use('/api/deouserdata', require('./routes/api/deouserdata'));
app.use('/api/mofmeeting', require('./routes/api/mofmeeting'));
app.use('/api/reference', require('./routes/api/reference'));
app.use('/api/atrocitydata', require('./routes/api/atrocitydata'));

//fix cannot GET
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'client/build')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server has started on port ${PORT}`));
