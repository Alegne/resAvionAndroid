const express = require('express');
const bodyParser = require('body-parser');
const avionRoutes = require('./src/routes/avionRoutes');
const voyageurRoutes = require('./src/routes/voyageurRoutes');
const resRoutes = require('./src/routes/resRoutes');
const recetteRoutes = require('./src/routes/recetteRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/avion', avionRoutes);
app.use('/api/voyageur', voyageurRoutes);
app.use('/api/reservation', resRoutes);
app.use('/api/recette', recetteRoutes);


app.listen(port, function(){
    console.log(`Server listen on port : '${port}'`);
});