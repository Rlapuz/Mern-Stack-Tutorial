const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require("cors");

mongoose.set('strictQuery', false);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:3000", "https://practice-for-capstone.netlify.app/"],
    credentials: true
}))


// app.get('/auth', (req, res) => {
//     res.send('Hello World!')
// })

// Connect to MongoDB
mongoose.connect(process.env.MDB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (error) => {
        if (error) {
            console.log('Error connecting to MongoDB')
        } else {
            console.log('Connected to MongoDB')
        }
    })

// set up routes
app.use("/auth", require('./routers/userRouter'))
app.use("/customer", require("./routers/customerRouter"))

