import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mainRoutes from './routes/mainRoutes';
import errorHandler from './middlewares/errorHandler';
import path from 'path';
import { prismaConnect } from './config/prismaConfig';

dotenv.config();

// prisma connection
prismaConnect()
  .then(() => console.log('Prisma connection is successful'))
  .catch((error) => console.log(error));

const startServer = async (): Promise<void> => {
  const app: Application = express();
  app.set('trust proxy', 1);

  // middlewares
  app.use(
    cors({
      credentials: true,
      origin: ['http://localhost:3000', 'https://themrzlyv.herokuapp.com'],
    }),
  );
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan logger is activated');
  }

  app.all('*', (req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://themrzlyv.herokuapp.com',
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });

  // routes
  app.use('/api', mainRoutes);

  // global error handler
  app.use(errorHandler);

  // Production Deploy
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
  }

  const port: number = Number(process.env.PORT) || 4000;

  app.listen(port, () => console.log(`Server is running on ${port}`));
};

startServer().catch((err) => console.log(err));
