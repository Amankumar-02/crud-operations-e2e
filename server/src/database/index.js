import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';

const connectToDB = async()=>{
    try {
        const mongoUrl = process.env.MONGODB_URL?.replace(/\/+$/, "");
        const connectionInstance = await mongoose.connect(`${mongoUrl}/${DB_NAME}`);
        console.log(`\nMONGODB Connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('\nMONGODB Connection Failed!! Error: ', error);
        process.exit(1);
    }
};

export default connectToDB;
