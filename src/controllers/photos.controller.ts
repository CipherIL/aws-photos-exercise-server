import {Request, Response} from 'express';
import fs from 'fs';

export const getPhotos = async (req:Request, res:Response) : Promise<void> => {
    try {
        fs.readdir(__dirname + "../../../images", (err,files)=>{
            if(err) {
                throw new Error(String(err));
            } else {
                res.send(files)
            }
        });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
}

export const uploadPhoto = async (req:Request ,res:Response) : Promise<void> => {
    try {
        res.send("ok");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}