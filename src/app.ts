import express from 'express';
import cors from 'cors';
import router from './routers/photos.router';

const app = express();

app.use(cors());
app.use(express.json())
app.use(router);
app.use('/photos', express.static('images'));

export default app;