import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'./images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const nameArr=file.originalname.split(".")
        cb(null, nameArr[0] + "-" + uniqueSuffix + "." + nameArr[1]);
    }
})

const fileFilter = (req:any, file:any ,cb:any) => {
    if(file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null,true);
    } else {
        cb(new Error("File not of type jpg or jpeg"),false);
    }
}

export const upload = multer({storage:storage, fileFilter:fileFilter});