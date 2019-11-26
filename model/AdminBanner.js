const {Sequelize, sequelize} = require("../modules/sequelize-conn");

/* Model 작성 */
const Model = Sequelize.Model;
class AdminBanner extends Model {}
AdminBanner.init({
	src: { 
		type: Sequelize.STRING,
		allowNull: false },
	position: {
		type: Sequelize.ENUM("top", "bot"),
		defaultValue: "top"
	},
	title: { 
		type: Sequelize.STRING,
		allowNull: true },
	desc: { 
		type: Sequelize.TINYINT,
		allowNull: false,
		defaultValue: 1},
	link: { 
		type: Sequelize.TINYINT,
		allowNull: false,
		defaultValue: 1}
},{
	sequelize,
	modelName: "banners",
	// timestamps: false
});
AdminBanner.sync({force: false});
// force: true -> 기존에 테이블이 존재하면 삭제하고 다시만든다. 절대 쓰지말자
// sync() 메서드를 최초 한번 실행하여 테이블이 생성되면 주석처리 하여 더이상 쓸 필요가 없다.
/*
(async () => {
	const result = await AdminLogin.sync({force: true});
	AdminLogin.create({
		adminID: "su",
		adminPW: "0000",
		grade: 9
	});
})();
*/

module.exports = {AdminBanner};