import 'dotenv/config';
// import {nameRouter} from './routes/nameRoute'

import {Router} from 'express';
import express from 'express';
import cors from 'cors';
// import router from './routes/nameRoute';

const app = express();
const port = 8080;
const router = Router();

app.use(cors());
app.get('/home', (req, res) => {
    res.send('Hello World!');
})

// app.use("/name", nameRouter);

router.get("/home", (_, res) => {
    res.send("hello word, get working")
}) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}, woohoo!`)
});