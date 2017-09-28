import http from 'http';
import express from 'express';
import colors from 'colors';
import path from 'path';

// Server Side Rendering
import { renderPage } from './ssr.js';

const app = express();
const fileOptions = {
    cacheControl: true,
    maxAge: 604800
}
app.use('/static', function(req, res) {
    var file = path.join(__dirname, '..', '../build/static', req.url);
    res.status(200).sendFile(file, fileOptions);
    return;
});
app.use('/public', function(req, res) {
    var file = path.join(__dirname, '..', '/public', req.url);
    res.status(200).sendFile(file, fileOptions);
    return;
});

app.get('*', renderPage);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
app.use(function(err, req, res, next) {
  console.error('error : ', err.message);
  res.status(err.status || 500);
});

const server = http.createServer(app);

server.listen(3002, function() {
  const address = server.address();
  console.log(
    `${'>>>'.cyan} ${'Listening on:'.rainbow} ${'localhost::'.trap
      .magenta}${`${address.port}`.green}`
  );
});
