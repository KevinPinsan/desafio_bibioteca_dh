const express = require('express');
const db = require('./app/models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.sequelize.sync()

require("./app/routes/livro.routes")(app);
require("./app/routes/locatario.routes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, _ => console.log(`Running at port ${PORT}`));