import express from 'express'
import mongoose  from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

// routes
import authRoute from './Routes/auth.js'
import userRoutes from './Routes/user.js'
import doctorsRouter from './Routes/doctors.js'

dotenv.config();

const app = express();
var corsOptions = {
    origin: "http://localhost:8000"
  };
  
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/doctor',doctorsRouter)
app.use("/", authRoute);
app.use('/user',userRoutes)

app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on port http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));