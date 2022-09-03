import SingleFile from '../models/fileschema.js'
import fs from 'fs'


export const singleFileUpload = async (req, res, next) => {
    try {
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
        console.log(req.file.path);
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const getallSingleFiles = async (req, res, next) => {
    try {
        const files = await SingleFile.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const deleteimg = async (req, res) => {
    try {
        let image = await SingleFile.findById(req.params.id)
        if (!image) {
            return res.status(401).send("Not Found")
        }

        let deleteimg = await SingleFile.findByIdAndDelete(req.params.id)
        fs.unlinkSync(deleteimg.filePath)
        res.json({ "succes": "img deleted", "deletedimg": deleteimg })

    } catch (error) {
        res.status(500).send(error);
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

