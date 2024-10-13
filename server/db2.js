const { Pool } = require("pg");

const con = new Pool({
  user: "shravanp",
  // host: "27.57.169.19",
  host: "192.168.1.28",
  database: "seller0",
  password: "test",
  port: 5432,
});
module.exports = con;

// const con = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'ecom_central',
//   password: '12',
//   port: 5432, // Default PostgreSQL port
// });
// module.exports = con;
// var con =mysql.createPool(
//     {
//         host: "localhost",
//         user: "root",
//         password: "yash@123",
//         database:"project",
//         port:3306

//         });
// var con = mysql.createPool({
//     host: "terraform-20230407134402900000000001.cmedonl60wg5.us-east-1.rds.amazonaws.com",
//     user: "yash",
//     password: "yashshah",
//     database:"project"
// });
// module.exports = con;
