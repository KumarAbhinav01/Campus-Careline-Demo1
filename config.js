import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

const config = {
    baseURL: process.env.BASE_URL,   
};
  
export default config;
  