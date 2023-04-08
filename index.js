const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
const categories = require("./data/category.json");
const course = require("./data/course.json");

app.get("/", (req, res) => {
  res.send("Server Ready");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/catcourse/:id", (req, res) => {
  const cat_id = req.params.id;
  if (cat_id == 7) {
    res.send(course);
  } else {
    const selectcat = course.filter((n) => n.category_id === cat_id);
    res.send(selectcat);
  }
});

app.get("/coursedetails/:id", (req, res) => {
  const course_id = req.params.id;
  const selectcourse = course.find((n) => n._id === course_id);
  res.send(selectcourse);
});
app.get("/checkout/:id", (req, res) => {
  const course_id = req.params.id;
  const selectcourse = course.find((n) => n._id === course_id);
  res.send(selectcourse);
});

app.listen(port, () => {
  console.log(`Learning website on port ${port}`);
});
