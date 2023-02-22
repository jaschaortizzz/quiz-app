import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config()

const port = process.env.PORT || 8080

app.get('/',(req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(8080, () => {
    console.log(`Server Connected to http://localhost:${port}`);
})