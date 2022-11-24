const express = require('express')
const app = express();
const cors = require('cors')
const routes = require('./src/routes')

app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    cors(),
    routes
)

const port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
});