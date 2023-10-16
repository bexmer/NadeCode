import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dibboiqeu',
  api_key: '118115822595699',
  api_secret: 'iJqHM20RaAnW-AnuL0x2b0jZ9_g',
});

const UploadImage = async (bufferImage) => {
  const responseImage = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) reject(err);

        resolve(result);
      })
      .end(bufferImage);
  });

  return responseImage;
};

export default UploadImage;
