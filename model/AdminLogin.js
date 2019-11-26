const {Sequelize, sequelize} = require("../modules/sequelize-conn");

/* Model 작성 */
const Model = Sequelize.Model;
class AdminLogin extends Model {}
AdminLogin.init({
	adminID: { 
		type: Sequelize.STRING,
		allowNull: false },
	adminPW: { 
		type: Sequelize.STRING,
		allowNull: false },
	grade: { 
		type: Sequelize.TINYINT,
		allowNull: false,
		defaultValue: 1}
},{
	sequelize,
	modelName: "admins",
	// timestamps: false
});
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

module.exports = {AdminLogin};