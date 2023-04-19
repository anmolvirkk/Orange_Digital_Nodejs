import express from 'express';
import cors from 'cors'
import {photos, videos, details, comments} from './data.js'

const app = express();

app.use(cors())

app.get('/photos', (_, res) => {
  res.send(photos);
});

app.get('/videos', (_, res) => {
  res.send(videos)
});

app.get('/details/:id', (req, res) => {
  const { id } = req.params
  const detail = details.filter(e=>e.id===id)[0]
  res.send(detail)
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params
  const comment = comments.filter(e=>e.id===id)[0]
  res.send(comment)
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});