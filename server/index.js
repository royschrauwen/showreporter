const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Route to get all posts
app.get("/api/logs", (req, res) => {
  db.query("SELECT * FROM logs ORDER BY logs.datum DESC", (err, result) => {
    if (err) {
      console.log(err);
    }
    // console.log(result);
    res.status(200).send(result);
  });
});

// Route to search
//'SELECT * FROM logs WHERE bericht LIKE "%' + q + '%"',
app.get("/api/logs/zoek/:q", (req, res) => {
  const q = req.params.q;
  // console.log("Q: " + q);
  // console.log(
  //   "db.escape(q): " + db.escape(q).replace("'", "").replace("'", "")
  // );
  db.query(
    'SELECT * FROM logs WHERE bericht LIKE "%' +
      db.escape(q).replace("'", "").replace("'", "") +
      '%" OR  toneelmeester LIKE "%' +
      db.escape(q).replace("'", "").replace("'", "") +
      '%"',
    q,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Gelukt!: " + result);
      res.status(200).send(result);
    }
  );
});

// Route to get one post
app.get("/api/log/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM logs WHERE log_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

// Route for creating the post
app.post("/api/create", (req, res) => {
  console.log(req.body);
  const formattedDatum =
    req.body.datum.substr(6, 4) +
    req.body.datum.substr(3, 2) +
    req.body.datum.substr(0, 2);
  const toneelmeester = req.body.toneelmeester;
  const datum = formattedDatum;
  const bericht = req.body.bericht;

  db.query(
    "INSERT INTO logs (toneelmeester, datum, bericht) VALUES (?,?,?)",
    [toneelmeester, datum, bericht],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      console.log(result);
      res.status(200).send(result);
    }
  );
});

// Route to like a post
app.post("/api/like/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "UPDATE posts SET likes = likes + 1 WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// Route to delete a post

// app.delete("/api/delete/:id", (req, res) => {
//   const id = req.params.id;

//   db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
