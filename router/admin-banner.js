const express = require("express");
const path = require("path");
const router = express.Router();
const {AdminBanner} = require(path.join(__dirname,"../model/AdminBanner"));
const util = require(path.join(__dirname, "../modules/util"));

/* REST */
router.get("/:type", getData);

/* Router CB */
async function getData(req, res, next) {
	let type = req.params.type;
	let vals = {
		leftNavs: [
			{link: "/admin/banner/top", title: "Top Banner SET"},
			{link: "/admin/banner/bottom", title: "Bottom Banner SET"}
		],
	}
	switch(type) {
		case "top":
			res.render("admin/bannerTop", vals);
			break;
		case "bottom":
				res.render("admin/bannerBottom", vals);
			break;
		default:
			next();
			break;
	}
}

module.exports = router; 