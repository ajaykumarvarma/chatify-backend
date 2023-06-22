import cloudinary from "cloudinary";
import colors from "colors";

import { app } from "./app.js";
import { connectDatabase } from "./config/database.js";
import { socketIoInitialization } from "./socketIo.js";

const PORT = process.env.PORT || 5000;

connectDatabase();

// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

cloudinary.config({
    cloud_name: 'dtrje5izu',
    api_key: '181872371835964',
    api_secret: '21HwnZfWo1KVSdvSJf3zM3UKPNs'
});

const server = app.listen(PORT, () => {
    console.log(`listening on Port : http://54.209.253.54:${PORT}`.cyan.bold);
});

socketIoInitialization(server);

app.get("/", (req, res) =>
    res.json({
        success: true,
        message: `welcome to the backend zone (${PORT}) ✌🏻`,
    })
);

