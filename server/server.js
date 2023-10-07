import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import cors from 'cors'

// import the router from your routes file
import router from '../server/config/routes.js'


dotenv.config()

const PORT = process.env.PORT || 5001

const app = express()

app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnityGrid Plaza API</h1>')
  })

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})