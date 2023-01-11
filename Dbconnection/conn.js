const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/staffDB"

mongoose.connect(url, {})
.then(() => {
  console.log('Database connected successfully');
})
.catch(err => {
    console.log(err);
})