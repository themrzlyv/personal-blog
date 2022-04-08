import mongoose from 'mongoose';

const connectToMongo = async () => {
  try {
    mongoose.connect(
      `${process.env.DATABASE_URL}`,
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log('MongoDB connected successfully'),
    );
  } catch (error) {
    console.log('Mongo error: ', error.message);
  }
};

export default connectToMongo;
