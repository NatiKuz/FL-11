const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares/delete-authorization');

const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

const port = 3000;

app.use(middlewares.deleteAuthorization);

app.use('/car', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
