import express from 'express'

import upload from '../helpers/filehelper.js'

const router = express.Router();

import {singleFileUpload,getallSingleFiles,deleteimg}  from '../controllers/imagepost.js'



router.post('/uploadsingle',upload.single('image'),singleFileUpload)
router.get('/getSingleFiles',getallSingleFiles);
router.delete('/deleteimage/:id',deleteimg);
export default router