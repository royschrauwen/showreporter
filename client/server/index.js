const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());

// // Change Timezone to Dutch
console.log(new Date().toString());
process.env.TZ = "Europe/Amsterdam";
console.log(new Date().toString());
// const nDate = new Date().toLocaleString("NL", {
//   timeZone: "Europe/Amsterdam",
// });
// console.log(nDate);

// Route to get all posts
app.get("/api/logs", (req, res) => {
  db.query("SELECT * FROM logs ORDER BY logs.datum DESC", (err, result) => {
    if (err) {
      console.log(err);
    }
    //console.log(result);
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
      '%" OR  theater LIKE "%' +
      db.escape(q).replace("'", "").replace("'", "") +
      '%" OR  overig LIKE "%' +
      db.escape(q).replace("'", "").replace("'", "") +
      '%" OR  schoonmaak LIKE "%' +
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
  const theater = req.body.theater;
  const schoonmaak = req.body.schoonmaak;
  const schoonmaakchecklist = req.body.schoonmaakchecklist;
  const overig = req.body.overig;

  console.log(schoonmaakchecklist);

  db.query(
    "INSERT INTO logs (toneelmeester, datum, bericht, theater, schoonmaak, vegen_schijf, vegen_toneel, vegen_opgang, vegen_achtertoneel, dweilen_schijf, dweilen_toneel, dweilen_opgang, dweilen_balletvloer, vuilnis_opgang_links, vuilnis_opgang_rechts, vuilnis_werkplaats, vuilnis_achtertoneel, vuilnis_kantoor, overig) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      toneelmeester,
      datum,
      bericht,
      theater,
      schoonmaak,
      schoonmaakchecklist[0],
      schoonmaakchecklist[1],
      schoonmaakchecklist[2],
      schoonmaakchecklist[3],
      schoonmaakchecklist[4],
      schoonmaakchecklist[5],
      schoonmaakchecklist[6],
      schoonmaakchecklist[7],
      schoonmaakchecklist[8],
      schoonmaakchecklist[9],
      schoonmaakchecklist[10],
      schoonmaakchecklist[11],
      schoonmaakchecklist[12],
      overig,
    ],
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
