import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const filestruct = new Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
},)


export default mongoose.model('SingleFile', filestruct);