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
const harvardSearchRoutes = require('./routes/harvard');
const edxSearchRoutes = require('./routes/edx');
const courseraSearchRoutes = require('./routes/coursera');
const udacitySearchRoutes = require('./routes/Udacity');
const bitdegreeSearchRoutes = require('./routes/bitdegree');
const khanAcademySearchRoutes = require('./routes/khanAcademy');
const openYaleSearchRoutes = require('./routes/openYale');
const digigradSearchRoutes = require('./routes/digigrad');
const bluebrownSearchRoutes = require('./routes/3blue1brown');
const apnacourseSearchRoutes = require('./routes/apnacourse');
const edurekaSearchRoutes = require('./routes/edureka');
const skillshareSearchRoutes = require('./routes/skillshare');
const codeacademySearchRoutes = require('./routes/codeacademy');
const alisonSearchRoutes = require('./routes/alison');
const arcademicsSearchRoutes = require('./routes/arcademics');
const harvardBusinessSearchRoutes = require('./routes/harvardBusiness');



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
let verblingSearchQuery = "english";
(async () => {
  
  puppeteer.launch({ headless: true }).then(async browser => {
    
    console.log('Running tests..');
    const page = await browser.newPage();
    await page.goto(`https://www.verbling.com/find-teachers/${verblingSearchQuery}?sort=magic`);
    await page.waitFor(10000);
    
    let verblingResult = await page.evaluate(() => {
      let instructorName = (document.querySelectorAll('h2[class="no-margin margin-right-md"] >a'));
      let price = (document.querySelectorAll('span[class="currency-converter "]'));
      let rating = (document.querySelectorAll('div[class="text-bold text-large"]'));
      let lessons = (document.querySelectorAll('div[class="flex flex-direction-column ProfileBase--truncate flex-direction-column"] >div >span'));
      
      var json = {instructorName:[],price:[],rating:[],lessons:[]};


      for(let i=0;i<instructorName.length;i++){
        json.instructorName.push(JSON.stringify(instructorName[i].innerText));       
      }
      
      for(let i=0;i<price.length;i++){
        if(i%2 === 0){
          json.price.push(JSON.stringify(price[i].innerText));
        }
      }
      for(let i=0;i<rating.length;i++){
        json.rating.push(JSON.stringify(rating[i].innerText));
      }
      for(let i=1;i<lessons.length;i++){
          if(i === 5 || i === 11 || i === 17 || i === 23 || i === 29 || i === 35)
        json.lessons.push(JSON.stringify(lessons[i].innerText));
      }
       return json;
    });
    console.log("verblingResult",verblingResult);
  })
  
  browser.close();
})();

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
