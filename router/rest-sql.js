const express = require("express");
const router = express.Router();

const {mysql, sqlExec} = require("../modules/mysql-conn");

/* REST */
router.get("/", getData);
router.post("/sql", postData);
router.put("/sql", putData);
router.delete("/sql", deleteData);

/* Post */

/* Router CB */
async function getData (req, res){
	let sql = "SELECT * FROM rest ORDER BY id DESC";
	let result = await sqlExec(sql);
	// res.json(result[0]);
	res.render("rest/restForm", {users: result[0]});
}

async function postData (req, res){
	let username = req.body.username;
	let sql = "INSERT INTO rest SET username=?";
	let sqlVals = [username];
	let result = await sqlExec(sql, sqlVals);
	res.redirect("/rest-sql");
}

async function putData (req, res){
	let sql = "UPDATE rest SET username=? WHERE id=?";
	let sqlVals = [req.body.username, req.body.id];
	let result = await sqlExec(sql, sqlVals);
	res.redirect("/rest-sql");
}
async function deleteData (req, res){
	let sql = "DELETE FROM rest WHERE id=?";
	let sqlVals = req.body.id;
	let result = await sqlExec(sql, sqlVals);
	(result[0].affectedRows > 0) ? res.json({code: 200}) : res.json({code: 500});
}

module.exports = router;