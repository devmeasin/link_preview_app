const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const metaHandler = require('./src/handler/metaHandler');
const errorHandler = require('./src/handler/errorHandler');

app.use(cors());
app.use(express.static(path.join('frontend-build')));
app.listen(5050, () => console.log('listening on port ' + 5050));

app.get('/', (req, res) => res.send(`<h1>Hello World!</h1>`));
app.get('/api/meta', metaHandler);
app.use(errorHandler);

module.exports = app;