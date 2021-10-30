const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const port = '8080';

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(helmet());
app.use(cors());

app.listen(port,async () => {
  console.log(`
  #########################################
    🛡️  Server listening on port: ${port} 🛡️ 
  #########################################
`);
})