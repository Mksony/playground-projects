import * as express from 'express';
import * as morgan from 'morgan';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as createError from 'http-errors';

import errorHandler from '../middleware/errorHandler';
import logger from '../tools/logger';
import authRouter from '../routes/auth';

const app = express();
const isDevelopment =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';

app.use(helmet());
app.use(compression());
if (isDevelopment) {
  app.use(
    morgan('dev', {
      stream: {
        write: message => logger.info(message.trim()),
      },
    })
  );
}

app.use('/auth', authRouter);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('*', (req, res, next) => {
  const err = new createError.NotFound();
  next(err);
});

app.use((req, res, next) => {
  const err = new createError.Forbidden();
  next(err);
});

app.use(errorHandler);

export default app;
