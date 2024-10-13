const express = require("express");
const cors = require("cors");
var connection1 = require("./db2");
const app = express();
var connection = require("./database");
app.use(cors());
app.use(express.json());
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server yash !" });
});
app.post("/reg", function (request, response) {
  var organization_id = "2";
  var email = request.body.useremail;
  console.log(email);
  var username = request.body.username;
  console.log(username);
  var password = request.body["password-input"];
  console.log(password);
  var role_id = "1";

  if (username && password) {
    connection.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");

      var sql =
        'INSERT INTO "user" (organization_id, email, username, password, role_id) VALUES ($1, $2, $3, $4, $5)';

      connection.query(
        sql,
        [organization_id, email, username, password, role_id],
        function (error, results, fields) {
          if (error) {
            if (
              error.code === "23505" &&
              error.constraint === "user_details_pk"
            ) {
              console.log("Email is already registered.");
              response
                .status(409)
                .json({ message: "Email is already registered." }); // Send an error message as JSON response
            } else {
              console.log("Error inserting data into the table!");
              console.log(error);
              response
                .status(500)
                .json({ message: "Error inserting data into the table." }); // Send a generic error message as JSON response
            }
          } else {
            console.log("Data inserted successfully registered!");
            console.log("Done");
            // response.sendFile(path.join(__dirname, 'themesbrand.com/steex/layouts', 'index.pug'));
            // response.status(200).json({ message: "Data inserted successfully!" }); // Send a success message as JSON response
          }
        }
      );
    });
  } else {
    response
      .status(400)
      .json({ message: "Please enter Username and Password!" }); // Send a bad request message as JSON response
  }
});
app.post("/org", function (request, response) {
  var name = request.body.name;
  console.log(name);
  var contact = request.body.contact;
  var subscriptionId = "1";

  if (name && contact) {
    connection.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");

      var sql =
        "INSERT INTO organization (name, contact, subscription_id) VALUES ($1, $2, $3)";
      connection.query(
        sql,
        [name, contact, subscriptionId],
        function (error, results, fields) {
          if (error) {
            if (
              error.code === "23505" &&
              error.constraint === "user_details_pk"
            ) {
              console.log("Email is already registered.");
              response
                .status(409)
                .json({ message: "Email is already registered." }); // Send an error message as JSON response
            } else {
              console.log("Error inserting data into the table!");
              console.log(error);
              response
                .status(500)
                .json({ message: "Error inserting data into the table." }); // Send a generic error message as JSON response
            }
          } else {
            console.log("Data inserted successfully!");
            console.log("Done");
            // response.sendFile(path.join(__dirname, 'themesbrand.com/steex/layouts', 'index.pug'));
            // response.status(200).json({ message: "Data inserted successfully!" }); // Send a success message as JSON response
          }
        }
      );
    });
  } else {
    response
      .status(400)
      .json({ message: "Please enter Username and Password!" }); // Send a bad request message as JSON response
  }
});
app.get("/revenue", (req, response) => {
  const query = `select sum(total_price) from order_items o inner join price_components  p on o.order_item_id =  p.order_item_id ;`;
  // const query =
  //   "select * from order_items oi where oi.order_date  >'2023-06-01' and  oi.order_date  <'2023-06-08' and oi.status <> 'CANCELLED' order by order_date ;";

  connection1.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Failed to fetch data" });
      return;
    }
    const revenue = results.rows[0].sum;
    response.json({ revenue: revenue });
    // response.render("index.pug", { revenue });
  });
});
app.get("/totalorders", (req, response) => {
  const query = `SELECT COUNT(order_item_id) AS count FROM order_items`;
  // const query =
  //   "select * from order_items oi where oi.order_date  >'2023-06-01' and  oi.order_date  <'2023-06-08' and oi.status <> 'CANCELLED' order by order_date ;";

  connection1.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Failed to fetch data" });
      return;
    }
    // console.log(results)
    const totalorders = results.rows[0].count;
    // console.log(totalorders)
    response.json({ totalorders: totalorders });
    // response.render("index.pug", { revenue });
  });
});
app.get("/totalreturns", (req, response) => {
  const query = `select count(rd.quantity) from return_details rd`;
  // const query =
  //   "select * from order_items oi where oi.order_date  >'2023-06-01' and  oi.order_date  <'2023-06-08' and oi.status <> 'CANCELLED' order by order_date ;";

  connection1.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Failed to fetch data" });
      return;
    }
    // console.log(results)
    const totalreturns = results.rows[0].count;
    // console.log("returns",totalreturns)
    response.json({ totalreturns: totalreturns });
    // response.render("index.pug", { revenue });
  });
});

app.get("/sales", (req, response) => {
  console.log("caleed");
  const salesQuery = "select count(order_item_id) from order_items;";
  const returnsQuery =
    "select count(o.order_item_id) from order_items o inner join price_components p on o.order_item_id = p.order_item_id where  o.status = 'RETURNED';";
  const cancelQuery =
    "select count(o.order_item_id ) from order_items o inner join price_components p on o.order_item_id = p.order_item_id where  o.status = 'CANCELLED';";
  const salesPromise = new Promise((resolve, reject) => {
    connection1.query(salesQuery, (error, results) => {
      if (error) {
        reject(error);
      } else {
        reject(results);
        resolve(results.rows[0].sales);
        console.log(results);
      }
    });
  });

  const returnsPromise = new Promise((resolve, reject) => {
    connection1.query(returnsQuery, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows[0].returns);
      }
    });
  });

  const cancellationsPromise = new Promise((resolve, reject) => {
    connection1.query(cancelQuery, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows[0].cancellations);
      }
    });
  });

  Promise.all([salesPromise, returnsPromise, cancellationsPromise])
    .then(([sales, returns, cancellations]) => {
      console.log("sales is here:::", sales);
      console.log("Result are here :::", results);
      response.json({
        sales: sales,
        returns: returns,
        cancellations: cancellations,
      });
      // response.json({ returns: returns });
      // response.json({ cancellations: cancellations });
      // console.log("sales is here suiiiiii:", sales);
      // console.log("returns:", returns);
      // console.log("cancellations::", cancellations);
      // res.render("index.pug", { sales, returns, cancellations });
    })
    .catch((error) => {
      console.error("Error executing queries:", error);
      console.log("done");
    });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
