const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.send('Working!');
});

require("./routes/history.js")(app);
require("./routes/user.js")(app);

app.listen(3000)