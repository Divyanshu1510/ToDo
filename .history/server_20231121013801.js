const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")


const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());



mongoose.connect('mongodb://127.0.0.1:27017/checklist')