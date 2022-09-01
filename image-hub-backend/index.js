import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import fileroute from './routes/fileupload.js'

const Connection_URL = 'mongodb+srv://InfinityXZod:LXaULb72Ht3.bqG@cluster0.w5larfk.mongodb.net/?retryWrites=true&w=majority'
const port = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(bodyParser.json())

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api', fileroute)

mongoose.connect(Connection_URL).then(app.listen(port, () => console.log(`server running on ${port}`))).catch((error) => console.log(error.message))