const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default port 8080

const patientData = require('./patient-parser')
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	let templateVars = {patientData};
	res.render("index", templateVars);
});

app.listen(PORT, () => {
 console.log(`Example app listening on port ${PORT}!`);
});	