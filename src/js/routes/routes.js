const express = require('express');
const router = express.Router();
const db = require("../config/db_connection")  
const {getAllQuizes, getQuizById, addNewQuiz, deleteQuiz, updateQuiz}  = require('../controllers/controllers') 
let count = 2;
router
    .get("/quizes",getAllQuizes)
    .get("/quizes/:id",getQuizById)
    .post("/quizes",addNewQuiz)
    .put("/quizes/:id",updateQuiz)
    .delete("/quizes/:id",deleteQuiz)
   

module.exports = router;    