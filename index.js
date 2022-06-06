import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;
const mongoose = require('mongoose');

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
mongoose.Promise = global.Promise;
await mongoose.connect('mongodb://localhost/productsdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() =>{
        console.log('success');
    }).catch((error) => {
        console.log('error', error);
    })
