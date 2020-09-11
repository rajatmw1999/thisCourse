const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//const youtubeSearchRoutes = require('./routes/youtube_search');
//const udemySearchRoutes  = require('./routes/udemy_search');
const harvardSearchRoutes = require("./api/routes/harvard");
const edxSearchRoutes = require("./api/routes/edx");
const courseraSearchRoutes = require("./api/routes/coursera");
const udacitySearchRoutes = require("./api/routes/Udacity");
const bitdegreeSearchRoutes = require("./api/routes/bitdegree");
const khanAcademySearchRoutes = require("./api/routes/khanAcademy");
const openYaleSearchRoutes = require("./api/routes/openYale");
const digigradSearchRoutes = require("./api/routes/digigrad");
const bluebrownSearchRoutes = require("./api/routes/3blue1brown");
const apnacourseSearchRoutes = require("./api/routes/apnacourse");
const edurekaSearchRoutes = require("./api/routes/edureka");
const skillshareSearchRoutes = require("./api/routes/skillshare");
const codeacademySearchRoutes = require("./api/routes/codeacademy");
const alisonSearchRoutes = require("./api/routes/alison");
const arcademicsSearchRoutes = require("./api/routes/arcademics");
const harvardBusinessSearchRoutes = require("./api/routes/harvardBusiness");
const verblingSearchRoutes = require("./api/routes/verbling");
const Roadmap = require("./api/routes/roadmap");
const marketingSearchRoutes = require("./api/routes/marketing");
const testRoute = require("./api/routes/test");
const masterRoute = require("./api/routes/master");
const dataRoutes = require("./api/data_routes/index");
const searrch = require("./api/routes/search");
const likeRoute = require("./api/routes/likes");
const deleteSkills = require("./api/routes/deleteSkills");
//console.log('In routes file');
mongoose.connect(
  "mongodb+srv://RamuKaka:Modi@123@cluster0.d9frx.mongodb.net/Skillunga?retryWrites=true&w=majority",
  {
    //useMongoClient: true
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("Database Connected")
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*"); //'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//app.use('/youtubeSearch', youtubeSearchRoutes);
app.use("/harvardSearch", harvardSearchRoutes);
app.use("/edxSearch", edxSearchRoutes);
app.use("/courseraSearch", courseraSearchRoutes);
app.use("/udacitySearch", udacitySearchRoutes);
app.use("/bitdegreeSearch", bitdegreeSearchRoutes);
app.use("/khanAcademySearch", khanAcademySearchRoutes);
app.use("/openYaleSearch", openYaleSearchRoutes);
app.use("/digigradSearch", digigradSearchRoutes);
app.use("/3blue1brownSearch", bluebrownSearchRoutes);
app.use("/apnacourseSearch", apnacourseSearchRoutes);
app.use("/edurekaSearch", edurekaSearchRoutes);
app.use("/skillshareSearch", skillshareSearchRoutes);
app.use("/codeacademySearch", codeacademySearchRoutes);
app.use("/alisonSearch", alisonSearchRoutes);
app.use("/arcademicsSearch", arcademicsSearchRoutes);
app.use("/harvardBusinessSearch", harvardBusinessSearchRoutes);
app.use("/verblingSearch", verblingSearchRoutes);
app.use("/roadmap", Roadmap);
app.use("/marketing", marketingSearchRoutes);
app.use("/test", testRoute);
app.use("/master", masterRoute);
app.use("/data", dataRoutes);
app.use("/search", searrch);
app.use("/like", likeRoute);
app.use("/deleteSkills", deleteSkills);
//console.log('aint here');
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

module.exports = app;
