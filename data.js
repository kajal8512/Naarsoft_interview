// create connection 

var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kajal@123",
    database: "dbProject"
  });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE dbProject", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

//   create table 

// first table
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE Employee (eid INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("emp Table created");
//     });
//   });


// second table
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE Department (did INT AUTO_INCREMENT PRIMARY KEY, department_name VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("department Table created");
//     });
//   });

  
// third table
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "CREATE TABLE Employee_details (edid int auto_increment,eid int , FOREIGN KEY(eid)  REFERENCES Employee(eid),did int, FOREIGN KEY (did) REFERENCES Department(did))";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("emp_details Table created");
  //   });
  // });
  
  

//   CREATE TABLE Employee_details (
//     eid int NOT NULL,
//     did int NOT NULL,
//     FOREIGN KEY (eid) REFERENCES Employee(eid),
//     FOREIGN KEY (did) REFERENCES Department(did)
// );


// insert into department table 

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Department (department_name) VALUES ?";
  var values =[["ese"],
              ["dsd"],
              ["sds"]]
  con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
