require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const generatorRouter = require('./routes/generatorRouter');
const favoritesRouter = require('./routes/favoritesRouter');
const basketRouter = require('./routes/basketRouter');

const PORT = process.env.PORT ?? 3000;

const app = express();

hbs.registerPartials(path.join(process.env.PWD, '/views/partials'));
app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'views'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/generator', generatorRouter);
app.use('/favorites', favoritesRouter);
app.use('/basket', basketRouter);

app.listen(PORT, () => {
  console.log('server start on ', PORT, '...');
});
