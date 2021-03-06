const express = require('express');
const bodyParser = require('body-parser');
const avionRoutes = require('./src/routes/avionRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/avion', avionRoutes);


app.listen(port, function(){
    console.log(`Server listen on port : '${port}'`);
});