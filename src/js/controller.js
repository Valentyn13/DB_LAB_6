const db = require("./conection");

const getAllGroups = (req, res) => {
  const query = "SELECT distinct name FROM mydb.groups";
  db.query(query, (err, result) => {
    if (err) res.status(500).json(err);
    res.status(200).json(result);
  });
};

const getAlUsersIngroup = (req, res) => {
  const query = `SELECT u.username
FROM mydb.groups_has_users as g 
join mydb.users as u on g.users_id=u.id 
join mydb.groups as s on g.groups_id=s.id
where g.groups_id = ${req.params.id}`;
  db.query(query, (err, result) => {
    if (err) res.status(500).json(err);
    res.status(200).json(result);
  });
};

const addNewGroup = (req, res) => {
  const { name, description, creatorId } = req.body;
  if (!(name && description && creatorId)) {
    return res.status(400).json({
      message: "You need to fill all fields: name, description, creatorId",
    });
  }
  const query = "insert into mydb.groups set ?";
  const uuid = new Date()
    .getTime()
    .toString()
    .slice(-4);
  const group = {
    id: uuid,
    name,
    description,
    creatorId,
  };
  db.query(query, group, (err) => {
    if (err) res.status(500).json(err);
    res.status(201).json({ message: "New group created" });
  });
};

const deleteGroup = (req, res) => {
  const query = "DELETE FROM mydb.groups WHERE id=${req.params.id}";
  db.query(
    `SELECT * FROM mydb.groups WHERE id=${req.params.id}`,
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length === 0)
        return res.status(404).json({ message: "NOT FOUND!" });
    }
  );
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Group deleted" });
  });
};

const updateGroup = (req, res) => {
  const { name, description, creatorId } = req.body;
  if (!(name || description || creatorId)) {
    res.status(400).json({ message: "At least one field required" });
    return;
  }
  const query = `SELECT * FROM mydb.groups WHERE id=${req.params.id}'`;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "No groups with this id" });
    let putQuery = "";
    if (name) {
      putQuery = `UPDATE mydb.groups SET name='${name}' WHERE id='${req.params.id}'`;
      db.query(putQuery, (err, res) => {
        if (err) return res.status(500).json(err);
      });
    }

    if (description) {
      putQuery = `UPDATE mydb.groups SET description='${description}' WHERE id='${req.params.id}'`;
      db.query(putQuery, (err, res) => {
        if (err) return res.status(500).json(err);
      });
    }

    if (creatorId) {
      putQuery = `UPDATE mydb.groups SET creatorId='${creatorId}' WHERE id='${req.params.id}'`;
      db.query(putQuery, (err, res) => {
        if (err) return res.status(500).json(err);
      });
    }

    res.status(200).json({ message: "Group updated successfully" });
  });
};

module.exports = {
  getAllGroups,
  getAlUsersIngroup,
  addNewGroup,
  deleteGroup,
  updateGroup,
};