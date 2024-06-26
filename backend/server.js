import app from "./app.js"; 
// when in backend if we import anything always use .js extension at the end

import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});