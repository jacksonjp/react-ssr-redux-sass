
import http from 'http';
import express from 'express';
import path from 'path';

// Server Side Rendering
import { renderPage } from './ssr.js';

require('colors');

const app = express();
const fileOptions = {
  cacheControl: true,
  maxAge: 604800
};
app.use('/static', (req, res) => {
  const file = path.join(__dirname, '..', '../build/static', req.url);
  res.status(200).sendFile(file, fileOptions);
});
app.use('/public', (req, res) => {
  const file = path.join(__dirname, '..', '/public', req.url);
  res.status(200).sendFile(file, fileOptions);
});

app.get('*', renderPage);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
app.use((err, req, res) => {
  // eslint-disable-next-line no-console
  console.error('error : ', err.message);
  res.status(err.status || 500);
});

const server = http.createServer(app);

server.listen(3002, () => {
  const address = server.address();
  // eslint-disable-next-line no-console
  console.log(
    `${'>>>'.cyan} ${'Listening on:'.rainbow} ${'localhost::'.trap.magenta}${`${address.port}`
      .green}`
  );
});
