const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb://localhost:27017/matecode', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => console.log('db connected'))
    .catch(error => console.log(error));
