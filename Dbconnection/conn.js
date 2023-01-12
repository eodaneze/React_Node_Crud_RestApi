const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const url = process.env.MONGO_URL

mongoose.connect(url, {})
.then(() => {
  console.log('Database connected successfully');
})
.catch(err => {
    console.log(err);
})

// vq6O8TKLbBsLI9F5