import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || { conn: null, promise: null}; //if cached connection is not already mongoose cached connection then set it to empty object; "(global as any)" = ts trick

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn
}