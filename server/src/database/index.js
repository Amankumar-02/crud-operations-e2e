import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';

const connectToDB = async () => {
  try {
    const rawMongoUrl = process.env.MONGODB_URL?.trim();
    if (!rawMongoUrl) {
      throw new Error('MONGODB_URL is not defined. Add it to server/.env or your environment.');
    }

    const mongoUrl = rawMongoUrl.replace(/\/+$/, "");
    const includesDbName = /mongodb(?:\+srv)?:\/\/[^/]+\/.+/.test(mongoUrl);
    const connectionString = includesDbName ? mongoUrl : `${mongoUrl}/${DB_NAME}`;

    const connectionInstance = await mongoose.connect(connectionString);
    console.log(`\nMONGODB Connected!! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('\nMONGODB Connection Failed!! Error:', error.message || error);
    process.exit(1);
  }
};

export default connectToDB;
