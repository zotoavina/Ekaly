const dotenv = require('dotenv');

dotenv.config();


async function uploadFile(files){
  try {
        if(!files) {
            return {
                status: false,
                message: 'No file uploaded'
            };
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = files.avatar;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv(process.env.PLAT_IMG + avatar.name);

            //send response
            return {
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            };
        }
    } catch (err) {
        throw err;
    }

}

module.exports = {
  uploadFile
}
