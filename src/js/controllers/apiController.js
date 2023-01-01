const db = require("../config/db_connection");

const getAllUsers = (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};

const getUser = (req, res) => {
  const query = `SELECT * FROM users WHERE id=${req.params.id}`;
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.sendStatus(404);
    res.status(200).json(result[0]);
  });
};

const AddNewUser = (req, res) => {
  const { username, email, password, role_id } = req.body;
  if (!(username && email && password))
    return res
      .status(400)
      .json({ message: "Username, email and password required" });
     const queryToFindUser = `SELECT * FROM users WHERE email="${email}"`;
      db.query(queryToFindUser, (err, result) =>{
        if (err) return res.status(500).json(err);
        if (result.length !== 0) return res.status(406).json('There is already user with this email');
  const query = "INSERT INTO users SET ?";
  const user = {
    username,
    email,
    password,
    role_id: role_id || 1,
  };
  db.query(query, user, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: "New user created" });
  });
});
};

const updateUser = (req, res) => {
  const { username, email, password } = req.body;
  if (!(username || email || password)){
    res
    .status(400)
    .json({ message: "Username, email or password  required " });
    return
  }
  db.query(`SELECT * FROM users WHERE id=${req.params.id}`, (err, result) =>{
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json('No user with this id');
  let query = "";
  if (username) {
    query = `UPDATE users SET username = '${req.body.username}' WHERE id = '${req.params.id}'`;
    db.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  if (email) {
    query = `UPDATE users SET email = '${req.body.email}' WHERE id = '${req.params.id}'`;
    db.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  if (password) {
    query = `UPDATE users SET password = '${req.body.password}' WHERE id = '${req.params.id}'`;
    db.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  res.status(200).json({ message: "User updated" });
});
};

const deleteUser = (req, res) => {
  const query = `DELETE FROM users WHERE id=${req.params.id}`;
  db.query(`SELECT * FROM users WHERE id=${req.params.id}`, (err, result) =>{
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json('No user with this id');
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "User deleted" });
  });
  });
};

module.exports = { getAllUsers, AddNewUser, getUser, updateUser, deleteUser };