const express = require('express');
require('dotenv').config()

const app = express();
const PORT = process.env.APP_PORT || 3000

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : true }))

// Routes

app.get("/", (req, res)=>{
    res.status(200).json({ message : "Welcome to the application backend"})
})

app.listen(PORT , ()=> {
    console.log("backend server running on : "+ PORT );
});
