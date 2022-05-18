require('dotenv').config();
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    SHOP_URL: process.env.SHOP_URL || "",
    API_KEY: process.env.API_KEY || "",
    API_SECRET_KEY: process.env.API_SECRET_KEY || "",
    API_TOKEN: process.env.API_TOKEN || ""
}