import https from 'https'
import fs from 'fs'
import express from 'express'
import * as dotenv from 'dotenv'
import { startup } from './routes/startup.js'
import { tracker } from './routes/tracker.js'
import { postTracker} from './routes/postTracker.js'
import { getLoggerInstance} from './logger.js'

const app = express()
dotenv.config()

const logger = getLoggerInstance();

const httpsOptions={
    key:fs.readFileSync('./key.pem'),
    cert:fs.readFileSync('./cert.pem'),
}

app.use(express.json())
app.use('/',startup)
app.use('/tracker',tracker)
app.use('/order',postTracker)


const server = https.createServer(httpsOptions,app)

server.listen(8080,()=>{
    //console.log('server listening on port 8080')//without logger 
    logger.info(`server listening on port 8080`) //with logger
})
