# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:  

## SQL-скрипт для створення на початкового наповнення бази даних  
```
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL,
  `name` ENUM('Respondent', 'Interviewer') NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `role_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_users_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`quizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`quizes` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `end_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`questions` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `help_text` VARCHAR(45) NOT NULL,
  `required` TINYINT NOT NULL,
  `quizes_id` INT NOT NULL,
  PRIMARY KEY (`id`, `quizes_id`),
  INDEX `fk_questions_quizes1_idx` (`quizes_id` ASC) VISIBLE,
  CONSTRAINT `fk_questions_quizes1`
    FOREIGN KEY (`quizes_id`)
    REFERENCES `mydb`.`quizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`options`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`options` (
  `id` INT NOT NULL,
  `text` VARCHAR(45) NOT NULL,
  `iscorrect` TINYINT NULL,
  `questions_id` INT NOT NULL,
  PRIMARY KEY (`id`, `questions_id`),
  INDEX `fk_options_questions1_idx` (`questions_id` ASC) VISIBLE,
  CONSTRAINT `fk_options_questions1`
    FOREIGN KEY (`questions_id`)
    REFERENCES `mydb`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`results`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`results` (
  `id` INT NOT NULL,
  `options_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `options_id`, `users_id`),
  INDEX `fk_results_options1_idx` (`options_id` ASC) VISIBLE,
  INDEX `fk_results_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_results_options1`
    FOREIGN KEY (`options_id`)
    REFERENCES `mydb`.`options` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_results_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`State`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`State` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`actionType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`actionType` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`actions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`actions` (
  `id` INT NOT NULL,
  `actedAt` DATETIME NOT NULL,
  `State_id` INT NOT NULL,
  `actionType_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_actions_State1_idx` (`State_id` ASC) VISIBLE,
  INDEX `fk_actions_actionType1_idx` (`actionType_id` ASC) VISIBLE,
  CONSTRAINT `fk_actions_State1`
    FOREIGN KEY (`State_id`)
    REFERENCES `mydb`.`State` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_actions_actionType1`
    FOREIGN KEY (`actionType_id`)
    REFERENCES `mydb`.`actionType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`groups` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `creatorId` INT NOT NULL,
  `actions_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `users_Roles_id` INT NOT NULL,
  `quizes_id` INT NOT NULL,
  PRIMARY KEY (`id`, `actions_id`, `users_id`, `users_Roles_id`, `quizes_id`),
  INDEX `fk_groups_actions1_idx` (`actions_id` ASC) VISIBLE,
  INDEX `fk_groups_users1_idx` (`users_id` ASC, `users_Roles_id` ASC) VISIBLE,
  INDEX `fk_groups_quizes1_idx` (`quizes_id` ASC) VISIBLE,
  CONSTRAINT `fk_groups_actions1`
    FOREIGN KEY (`actions_id`)
    REFERENCES `mydb`.`actions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_groups_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_groups_quizes1`
    FOREIGN KEY (`quizes_id`)
    REFERENCES `mydb`.`quizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`role` (`id`, `name`) VALUES (1, 'Respondent');
INSERT INTO `mydb`.`role` (`id`, `name`) VALUES (2, 'Interviewer');

COMMIT;

```


# RESTfull сервіс для управління даними

## Файл підключення до бази даних

```js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rfyfky11*',
    database: 'mydb'
});

module.exports = db;
```
## Кореневий файл серверу

```js
const db = require('./config/db_connection');
const express = require('express');
const app = express();

const PORT = 3500;

app.use(express.json());

app.use('/api', require('./routes/apiRoute'));

db.connect(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)));
```

##  Файл з роутером

 ```js
 const express = require("express");
const router = express.Router();
const { getAllUsers, AddNewUser, getUser, updateUser, deleteUser } = require("../controllers/apiController");

router
  .get("/users", getAllUsers)
  .get("/user/:id", getUser)
  .post("/user", AddNewUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);

module.exports = router;

 ```

##  Файл контролерів для обробки запитів

```js
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
```



