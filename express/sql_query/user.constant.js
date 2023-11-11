
/**
 * @file 用戶SQL語法查詢字串
 */


/**
 * 獲取使用者所有資料
 * 
 * @constant
 * @type {string}
 */
const getUserData = `SELECT user.\`user_id\`,\`user_name\`,\`user_mail\`,\`user_phone\`,\`user_password\`,\`user_sex\`,\`user_age\`,\`user_register_time\`,\`position_name\`,\`department_name\`,\`role_uid\` FROM user JOIN role ON user.user_id=role.user_id JOIN departments_position ON user.position_id = departments_position.position_id
      JOIN departments ON departments_position.department_id = departments.department_id WHERE user.user_name=?`;

/**
 * 創建使用者所有資料
 * 
 * @constant
 * @type {string}
 */
const createUserData = `INSERT INTO user(\`user_name\`,\`position_id\`,\`user_mail\`,\`user_password\`,\`user_phone\`,\`user_sex\`,\`user_age\`) VALUES(?,?,?,?,?,?,?)`;


module.exports = { getUserData, createUserData }


