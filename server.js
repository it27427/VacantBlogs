const app = require('./app');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config/dotenv.env' });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Server is successfully listening at: http://localhost:${port}`.bgCyan
  );
});
