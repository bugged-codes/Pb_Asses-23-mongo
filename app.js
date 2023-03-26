// const PORT = 4000;
const express = require('express');
const bodyParser = require('body-parser');
const stuRouter = require('./Routes/Rstudents');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
// console.log(process.env);
const envPort = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(stuRouter);
// app.use(stuRouter.post);
// app.use(stuRouter.get);

app.listen(envPort, () => {
	console.log('listening on port: ', envPort);
});
