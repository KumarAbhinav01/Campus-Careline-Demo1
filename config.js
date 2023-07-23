import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

const config = {
    baseURL: process.env.BASE_URL | 'https://campus-careline-demo1.onrender.com',   
};
  
export default config;
  
