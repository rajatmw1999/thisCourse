
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let rp = require("request-promise");
let $ = require("cheerio");

const app = express();
const youtubeSearchRoutes = require('./api/routes/youtube_search');
const udemySearchRoutes  = require('./api/routes/udemy_search');
const userRoutes = require('./api/routes/users');
const harvardSearchRoutes = require('./routes/harvard');
const edxSearchRoutes = require('./routes/edx');
const courseraSearchRoutes = require('./routes/coursera');
const udacitySearchRoutes = require('./routes/Udacity');
const bitdegreeSearchRoutes = require('./routes/bitdegree');
const khanAcademySearchRoutes = require('./routes/khanAcademy');
const openYaleSearchRoutes = require('./routes/openYale');
const digigradSearchRoutes = require('./routes/digigrad');

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers","Content-Type,X-Request-With");
    if(req.method==="OPTION"){
        res.sendStatus(200);
    }
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Coursera Part
rp('https://www.coursera.org/search?query=web%20development&skipBrowseRedirect=true')
.then((html) => {
    let name = $('.ais-InfiniteHits-item',html);
    for(let i=0;i<name.length;i++){
    console.log("Name : ",name[i].children[0].children[0].children[0].children[0].children[0].children[0].children[0].attribs.alt);
    console.log("ImgLink : ",name[i].children[0].children[0].children[0].children[0].children[0].children[0].children[0].attribs.src);
    console.log("Partner Name : ",name[i].children[0].children[0].children[0].children[0].children[0].children[0].next.children[0].next.children[0].children[0].data);
    console.log("Course Type : ",name[i].children[0].children[0].children[0].children[0].children[0].children[0].next.children[0].next.next.children[0].children[0].data,"\n");
    };



});

//Youtube Route
app.use('/youtubeSearch', youtubeSearchRoutes);
app.use('/udemySearch',udemySearchRoutes);
app.use('/users', userRoutes);
app.use('/harvardSearch',harvardSearchRoutes);
app.use('/edxSearch',edxSearchRoutes);
app.use('/courseraSearch',courseraSearchRoutes);
app.use('/udacitySearch',udacitySearchRoutes);
app.use('/bitdegreeSearch', bitdegreeSearchRoutes);
app.use('/khanAcademySearch',khanAcademySearchRoutes);
app.use('/openYaleSearch',openYaleSearchRoutes);
app.use('/digigradSearch',digigradSearchRoutes);


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
})

app.listen(process.env.PORT || 8000,() => {
    console.log("Server is running");
}); 
