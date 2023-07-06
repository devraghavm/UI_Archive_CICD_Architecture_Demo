const config = require('./config.js');
const app = require('./app');

const port = config.PORT;

app.listen(port, () =>
  console.log(`App is listening on http://localhost:${port}`)
);
