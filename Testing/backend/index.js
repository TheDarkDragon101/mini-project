import Express from "express";
import mysql from "mysql";
import cors from "cors";

const app = Express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0947534917za",
  database: "testingdb",
})
app.use(Express.json());
app.use(cors())
app.post('/test',(req,res) => {
  res.sendStatus(200)
})
app.get('/event', (req, res) => {
  db.query("SELECT * FROM testingdb.event", (err, result) => {
    if (err) { res.status(404).send('Error in backend') }
    else {
      res.json(result)
    }
  })
})

app.post("/events", (req, res) => {
  const sql = "INSERT INTO event(`title`, `date`) VALUES (?,?)";
  const values = [
    req.body.title,
    req.body.date,
  ];
  console.log(values)
  db.query(sql, values, (err, data) => {
    if (err) return res.send(err);
    return res.json("App event success");
  }
  )
})

app.post('/events/rev', (req, res) => {
  const values = [
    req.body.title
  ];
  const sql = "DELETE FROM event WHERE title = ?"
  db.query(sql, values, (err, result) => {
    if (err) return res.status(404).json(err);
    return res.json("event is deleted");
  })
})


app.post('/events/update', (req, res) => {

  if (!req.body.date) {
    return res.status(500).json({
      message: "Missing date parameter",
    });
  }
  if (!req.body.title) {
    return res.status(500).json({
      message: "Missing title parameter",
    });
  }

  const sql = "UPDATE event SET title = ? WHERE date = ?";
  const values = [
    req.body.title,
    req.body.date,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
    return res.json("Event is updated");
  });
})

app.listen(8800, () => {
  console.log('backend listening to port 8800')
})

export default app
//can you build testing file from this code 