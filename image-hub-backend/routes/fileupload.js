import express from 'express'

import upload from '../helpers/filehelper.js'

const router = express.Router();

import {singleFileUpload,getallSingleFiles}  from '../controllers/imagepost.js'



router.post('/uploadsingle',upload.single('image'),singleFileUpload)
router.get('/getSingleFiles',getallSingleFiles);
export default router