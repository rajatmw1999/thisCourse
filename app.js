//jshint esversion:6
require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
let path = require('path');
let rp = require("request-promise");
let $ = require("cheerio");
let mongoose = require("mongoose");
let session = require("express-session");
let passport = require("passport");
let passportLocalMongoose = require("passport-local-mongoose");
let GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
let GitHubStrategy = require('passport-github').Strategy;
let LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
let findOrCreate = require("mongoose-findorcreate");

// let verblingResult;

const app = express();
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
puppeteer.use(StealthPlugin());

const youtubeSearchRoutes = require('./api/routes/youtube_search');
const udemySearchRoutes  = require('./api/routes/udemy_search');
const harvardSearchRoutes = require('./api/routes/harvard');
const edxSearchRoutes = require('./api/routes/edx');
const courseraSearchRoutes = require('./api/routes/coursera');
const udacitySearchRoutes = require('./api/routes/Udacity');
const bitdegreeSearchRoutes = require('./api/routes/bitdegree');
const khanAcademySearchRoutes = require('./api/routes/khanAcademy');
const openYaleSearchRoutes = require('./api/routes/openYale');
const digigradSearchRoutes = require('./api/routes/digigrad');
const bluebrownSearchRoutes = require('./api/routes/3blue1brown');
const apnacourseSearchRoutes = require('./api/routes/apnacourse');
const edurekaSearchRoutes = require('./api/routes/edureka');
const skillshareSearchRoutes = require('./api/routes/skillshare');
const codeacademySearchRoutes = require('./api/routes/codeacademy');
const alisonSearchRoutes = require('./api/routes/alison');
const arcademicsSearchRoutes = require('./api/routes/arcademics');
const harvardBusinessSearchRoutes = require('./api/routes/harvardBusiness');
const verblingSearchRoutes = require('./api/routes/verbling');


app.use(session({
    secret:"thisCourse Secret",
    resave:false,
    saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true});
// mongoose.set("useCreateIndex",true);
// const userSchema = new mongoose.Schema({
//     email:String,
//     password:String
// });

// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

// const User = new mongoose.model("User",userSchema);

// passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//GOOGLE OAUTH
passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/oauth/google/tC",
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userInfo",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

//GITHUB OAUTH
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/oauth/github/tC"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

//LINKEDIN OAUTH
passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_KEY,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: "http://localhost:8000/oauth/linkedin/tC",
    scope: ['r_emailaddress', 'r_basicprofile'],
  }, function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's LinkedIn profile is returned to
      // represent the logged-in user. In a typical application, you would want
      // to associate the LinkedIn account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }));


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers","Content-Type,X-Request-With");
    if(req.method==="OPTION"){
        res.sendStatus(200);
    }
    next();
});


// Verbling


//Youtube Route
app.use('/youtubeSearch', youtubeSearchRoutes);
app.use('/udemySearch',udemySearchRoutes);
app.use('/harvardSearch',harvardSearchRoutes);
app.use('/edxSearch',edxSearchRoutes);
app.use('/courseraSearch',courseraSearchRoutes);
app.use('/udacitySearch',udacitySearchRoutes);
app.use('/bitdegreeSearch', bitdegreeSearchRoutes);
app.use('/khanAcademySearch',khanAcademySearchRoutes);
app.use('/openYaleSearch',openYaleSearchRoutes);
app.use('/digigradSearch',digigradSearchRoutes);
app.use('/3blue1brownSearch',bluebrownSearchRoutes);
app.use('/apnacourseSearch',apnacourseSearchRoutes);
app.use('/edurekaSearch', edurekaSearchRoutes);
app.use('/skillshareSearch', skillshareSearchRoutes);
app.use('/codeacademySearch', codeacademySearchRoutes);
app.use('/alisonSearch', alisonSearchRoutes);
app.use('/arcademicsSearch',arcademicsSearchRoutes);
app.use('/harvardBusinessSearch', harvardBusinessSearchRoutes);
app.use('/verblingSearch',verblingSearchRoutes);


app.get(express.static(path.join(__dirname,'frontend/build')));
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});


app.use((req, res, next) =>{
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

app.listen(process.env.PORT || 8000,() => {
    console.log("Server is running");
}); 
