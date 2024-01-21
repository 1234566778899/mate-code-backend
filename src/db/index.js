const mongoose = require('mongoose');
const { config } = require('dotenv');
config();
const url = `${process.env.MONGO_URL}`;
//const url = 'mongodb://localhost:27017/matecode';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => console.log('db connected'))
    .catch(error => console.log(error));
