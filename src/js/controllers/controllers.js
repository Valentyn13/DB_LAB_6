const db = require("./../config/db_connection")  

const getAllQuizes = (req, res) => {
    const query = "SELECT * FROM quizes";
    db.query(query, (err, result) => {
        if (err) res.status(500).json(err);
        res.status(200).json(result) 
    });
};

const getQuizById = (req,res) => {
    const query = `SELECT * FROM quizes WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) res.status(500).json(err);
        if(result.length === 0) res.sendStatus(404)
        res.status(200).json(result[0])
    })
}

const addNewQuiz = (req,res) => {
    const {name, title, description, end_date} = req.body;
    if(!(name && title && description && end_date)) {
        return res
            .status(400)
            .json({message:'You need to fill all fields: name, title, description, end_date'})
    }
    const query = "INSERT INTO quizes SET ?";
    const uuid = new Date().getTime().toString().slice(-4)
    const quiz = {
        id:uuid,
        name,
        title,
        description,
        end_date
    }
    db.query(query,quiz, err => {
        if (err) res.status(500).json(err)
        res.status(201).json({message:'New quiz created'})
    })
}

const updateQuiz = (req, res) => {
    const {name, title, description, end_date} = req.body;
    if(!(name||title||description||end_date)) {
        res 
            .status(400)
            .json({message:'At least one field required'})
        return    
    }
    const query = `SELECT * FROM quizes WHERE id=${req.params.id}`
    
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err)
        if (result.length === 0) return res.status(404).json({message:"No quizes with this id"})
        let putQuery = '';
        if(name) {
            putQuery = `UPDATE quizes SET name='${name}' WHERE id='${req.params.id}'`;
            db.query(putQuery,(err, res) => {
                if(err) return res.status(500).json(err)
            })
        }

        if(title){
            putQuery = `UPDATE quizes SET title='${title}' WHERE id='${req.params.id}'`
            db.query(putQuery,(err, res) => {
                if(err) return res.status(500).json(err)
            })
        } 

        if(description){
            putQuery = `UPDATE quizes SET description='${description}' WHERE id='${req.params.id}'`
            db.query(putQuery,(err, res) => {
                if(err) return res.status(500).json(err)
            })
        } 

        if(end_date){
            putQuery = `UPDATE quizes SET end_date='${end_date}' WHERE id='${req.params.id}'`
            db.query(putQuery,(err, res) => {
                if(err) return res.status(500).json(err)
            })
        }
        
        res.status(200).json({message:"Quiz updated"})
    })
}

const deleteQuiz = (req, res) => {
    const query = `DELETE FROM quizes WHERE id=${req.params.id}`
    db.query(`SELECT * FROM quizes WHERE id=${req.params.id}`, (err, result) => {
        if (err) return res.status(500).json(err);
        if(result.length === 0) return res.status(404).json({message:"NOT FOUND!"})
    })
    db.query(query,(err, result) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json({message:'Quiz deleted'})
    })
}


module.exports = {getAllQuizes, getQuizById, addNewQuiz, deleteQuiz, updateQuiz};