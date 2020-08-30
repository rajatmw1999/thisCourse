const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');
// const coursera = require('./coursera');
// const udacity = require('./Udacity');
const coursera = require('../middleware/coursera');
const udacity = require('../middleware/udacity');
const udemy = require('../middleware/udemy');
const edx = require('../middleware/edx');
const harvard = require('../middleware/harvard');
const skillshare = require('../middleware/skillshare');
// const alison = require('../middleware/alison');
const apnacourse = require('../middleware/apnacourse');
const arcademics = require('../middleware/arcademics');
const bitdegree = require('../middleware/bitdegree');
// const codeacademy = require('../middleware/codeacademy');
const digigrad = require('../middleware/digigrad');
// const edureka = require('../middleware/edureka');
const khanacademy = require('../middleware/khanAcademy');
const openyale = require('../middleware/openYale');
const verbling = require('../middleware/verbling');





//1
router.get('/IT',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });

					coursera(req,res,next,'network%20security','IT');
					coursera(req,res,next,'hardware','IT');
					// coursera(req,res,next,'software%20development','IT');
					// coursera(req,res,next,'game%20development','IT');
					// coursera(req,res,next,'software%20tools','IT');
					// coursera(req,res,next,'IT%20management','IT');
					// coursera(req,res,next,'mobile%20apps','IT');
					// coursera(req,res,next,'software%20engineering','IT');
					// coursera(req,res,next,'data%20science','IT');
					// coursera(req,res,next,'databases','IT');
					// coursera(req,res,next,'core%20it%20skills','IT');

					// udemy(req,res,next,'network+and+security','IT');
					// udemy(req,res,next,'hardware','IT');
					// udemy(req,res,next,'software+development','IT');
					// udemy(req,res,next,'game+development','IT');
					// udemy(req,res,next,'software+tools','IT');
					// udemy(req,res,next,'it+management','IT');
					// udemy(req,res,next,'mobile+apps','IT');
					// udemy(req,res,next,'software+engineering','IT');
					// udemy(req,res,next,'data+science','IT');
					// udemy(req,res,next,'databases','IT');
					// udemy(req,res,next,'core+it+skills','IT');

					// edx(req,res,next,'network%20security','IT');
					// edx(req,res,next,'hardware','IT');
					// edx(req,res,next,'software%20development','IT');
					// edx(req,res,next,'game%20development','IT');
					// edx(req,res,next,'software%20tools','IT');
					// edx(req,res,next,'IT%20management','IT');
					// edx(req,res,next,'mobile%20apps','IT');
					// edx(req,res,next,'software%20engineering','IT');
					// edx(req,res,next,'data%20science','IT');
					// edx(req,res,next,'databases','IT');
					// edx(req,res,next,'core%20it%20skills','IT');

					// harvard(req,res,next,'network%20security','IT');
					// harvard(req,res,next,'hardware','IT');
					// harvard(req,res,next,'software%20development','IT');
					// harvard(req,res,next,'game%20development','IT');
					// harvard(req,res,next,'software%20tools','IT');
					// harvard(req,res,next,'IT%20management','IT');
					// harvard(req,res,next,'software%20engineering','IT');
					// harvard(req,res,next,'data%20science','IT');
					// harvard(req,res,next,'databases','IT');
					// harvard(req,res,next,'core%20it%20skills','IT');

					// skillshare(req,res,next,'network%20security','IT');
					// skillshare(req,res,next,'hardware','IT');
					// skillshare(req,res,next,'software%20development','IT');
					// skillshare(req,res,next,'game%20development','IT');
					// skillshare(req,res,next,'software%20tools','IT');
					// skillshare(req,res,next,'IT%20management','IT');
					// skillshare(req,res,next,'software%20engineering','IT');
					// skillshare(req,res,next,'data%20science','IT');
					// skillshare(req,res,next,'databases','IT');
					// skillshare(req,res,next,'core%20it%20skills','IT');

					// udacity(req,res,next,'network%20security','IT');
					// udacity(req,res,next,'hardware','IT');
					// udacity(req,res,next,'software%20development','IT');
					// udacity(req,res,next,'game%20development','IT');
					// udacity(req,res,next,'software%20tools','IT');
					// udacity(req,res,next,'IT%20management','IT');
					// udacity(req,res,next,'software%20engineering','IT');
					// udacity(req,res,next,'data%20science','IT');
					// udacity(req,res,next,'databases','IT');
					// udacity(req,res,next,'core%20it%20skills','IT');


	
	console.log('Inside IT');
	res.status(200).json({
		message:'Search Results for /IT !'
		// query: query.q,
	});
});

//2
router.get('/Language',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });

					// coursera(req,res,next,'english','Language');
					// coursera(req,res,next,'spanish','Language');
					// coursera(req,res,next,'german','Language');
					// coursera(req,res,next,'french','Language');
					// coursera(req,res,next,'chinese','Language');
					// coursera(req,res,next,'arabic','Language');
					// coursera(req,res,next,'japanese','Language');
					
					// verbling(req,res,next,'english','Language');
					// verbling(req,res,next,'spanish','Language');
					// verbling(req,res,next,'german','Language');
					// verbling(req,res,next,'french','Language');
					// verbling(req,res,next,'arabic','Language');
					// verbling(req,res,next,'japanese','Language');
	
	console.log('Inside Language');
	res.status(200).json({
		message:'Search Results for /Language !'
		// query: query.q,
	});
});

//3
router.get('/Science',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });

					// coursera(req,res,next,'life%20science','Science');
					// coursera(req,res,next,'physics','Science');
					// coursera(req,res,next,'general%20science','Science');
					// coursera(req,res,next,'chemistry','Science');

					
					// udemy(req,res,next,'life+science','Science');
					// udemy(req,res,next,'physics','Science');
					// udemy(req,res,next,'general+science','Science');
					// udemy(req,res,next,'chemistry','Science');
					
					/* udacity(req,res,next,'life%20science','Science');
					 udacity(req,res,next,'physics','Science');
					 udacity(req,res,next,'general%20science','Science');
					 udacity(req,res,next,'chemistry','Science'); */

					// khanacademy(req,res,next,'life%20science','Science');
					// khanacademy(req,res,next,'physics','Science');
					// khanacademy(req,res,next,'general%20science','Science');
					// khanacademy(req,res,next,'chemistry','Science','Science');

					// edx(req,res,next,'life%20science','Science');
					// edx(req,res,next,'physics','Science');
					// edx(req,res,next,'general%20science','Science');
					// edx(req,res,next,'chemistry','Science');
					
	
	console.log('Inside Science');
	res.status(200).json({
		message:'Search Results for /Science !'
		// query: query.q,
	});
});

//4
router.get('/Health',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });

					// coursera(req,res,next,'mental%20health','Health');
					// coursera(req,res,next,'health%20care','Health');
					// coursera(req,res,next,'nutrition','Health');
					// coursera(req,res,next,'fitness','Health');
					// coursera(req,res,next,'yoga','Health');

					// harvard(req,res,next,'mental%20health','Health');
					// harvard(req,res,next,'health%20care','Health');
					// harvard(req,res,next,'nutrition','Health');
					// harvard(req,res,next,'fitness','Health');

					// udemy(req,res,next,'mental+health','Health');
					// udemy(req,res,next,'health+care','Health');
					// udemy(req,res,next,'nutrition','Health');
					// udemy(req,res,next,'fitness','Health');
					// udemy(req,res,next,'yoga','Health');
					
					// edx(req,res,next,'mental%20health','Health');
					// edx(req,res,next,'health%20care','Health');
					// edx(req,res,next,'nutrition','Health');
					// edx(req,res,next,'fitness','Health');
					// edx(req,res,next,'yoga','Health');

	console.log('Inside Health');
	res.status(200).json({
		message:'Search Results for /Health !'
		// query: query.q,
	});
});

//5
router.get('/Humanities',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });

					// coursera(req,res,next,'education','Humanities');
					// coursera(req,res,next,'history','Humanities');
					// coursera(req,res,next,'politics','Humanities');
					// coursera(req,res,next,'sociology','Humanities');
					// coursera(req,res,next,'personal%20development','Humanities');
					// coursera(req,res,next,'geography','Humanities');
					// coursera(req,res,next,'law','Humanities');					
					// coursera(req,res,next,'psychology','Humanities');
					// coursera(req,res,next,'media%20and%20journalism','Humanities');
					// coursera(req,res,next,'economics','Humanities');
					// coursera(req,res,next,'architecture','Humanities');

					// udemy(req,res,next,'education','Humanities');
					// udemy(req,res,next,'history','Humanities');
					// udemy(req,res,next,'politics','Humanities');
					// udemy(req,res,next,'sociology','Humanities');
					// udemy(req,res,next,'personal+development','Humanities');
					// udemy(req,res,next,'geography','Humanities');
					// udemy(req,res,next,'law','Humanities');					
					// udemy(req,res,next,'psychology','Humanities');
					// udemy(req,res,next,'media+and+journalism','Humanities');
					// udemy(req,res,next,'economics','Humanities');
					// udemy(req,res,next,'architecture','Humanities');

					// khanacademy(req,res,next,'education','Humanities');
					// khanacademy(req,res,next,'history','Humanities');
					// khanacademy(req,res,next,'politics','Humanities');
					// khanacademy(req,res,next,'sociology','Humanities');
					// khanacademy(req,res,next,'personal%20development','Humanities');
					// khanacademy(req,res,next,'geography','Humanities');
					// khanacademy(req,res,next,'law','Humanities');					
					// khanacademy(req,res,next,'psychology','Humanities');
					// khanacademy(req,res,next,'media%20and%20journalism','Humanities');
					// khanacademy(req,res,next,'economics','Humanities');
					// khanacademy(req,res,next,'architecture','Humanities');
					
					// edx(req,res,next,'education','Humanities');
					// edx(req,res,next,'history','Humanities');
					// edx(req,res,next,'politics','Humanities');
					// edx(req,res,next,'sociology','Humanities');
					// edx(req,res,next,'personal%20development','Humanities');
					// edx(req,res,next,'geography','Humanities');
					// edx(req,res,next,'law','Humanities');					
					// edx(req,res,next,'psychology','Humanities');
					// edx(req,res,next,'media%20and%20journalism','Humanities');
					// edx(req,res,next,'economics','Humanities');
					// edx(req,res,next,'architecture','Humanities');
	
	console.log('Inside Humanities');
	res.status(200).json({
		message:'Search Results for /Humanities !'
		// query: query.q,
	});
});

//6
router.get('/Maths',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });

					// coursera(req,res,next,'core%20math%20skills','Maths');
					// coursera(req,res,next,'calculus','Maths');
					// coursera(req,res,next,'probability%20and%20statistics','Maths');
					// coursera(req,res,next,'algebra','Maths');
					// coursera(req,res,next,'geometry','Maths');
					// coursera(req,res,next,'series%20and%20sequences','Maths');
					// coursera(req,res,next,'exam%20prep','Maths');
					
					// edx(req,res,next,'core%20math%20skills','Maths');
					// edx(req,res,next,'calculus','Maths');
					// edx(req,res,next,'probability%20and%20statistics','Maths');
					// edx(req,res,next,'algebra','Maths');
					// edx(req,res,next,'geometry','Maths');
					// edx(req,res,next,'series%20and%20sequences','Maths');
					// edx(req,res,next,'exam%20prep','Maths');

					// khanacademy(req,res,next,'core%20math%20skills','Maths');
					// khanacademy(req,res,next,'calculus','Maths');
					// khanacademy(req,res,next,'probability%20and%20statistics','Maths');
					// khanacademy(req,res,next,'algebra','Maths');
					// khanacademy(req,res,next,'geometry','Maths');
					// khanacademy(req,res,next,'series%20and%20sequences','Maths');
					// khanacademy(req,res,next,'exam%20prep','Maths');

					// arcademics(req,res,next,'web');
	
	console.log('Inside Maths');
	res.status(200).json({
		message:'Search Results for /Maths !',
		query: query.q,
	});
});

//7
router.get('/Business',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });

					// edx(req,res,next,'human%20resources','Business');
					// edx(req,res,next,'operations','Business');
					// edx(req,res,next,'ecommerce','Business');
					// edx(req,res,next,'leadership%20and%20management','Business');
					// edx(req,res,next,'entrepreneurship','Business');
					// edx(req,res,next,'project%20management','Business');
					// edx(req,res,next,'sales','Business');
					// edx(req,res,next,'finance','Business');
					// edx(req,res,next,'tourism%20and%20hospitality','Business');
					// edx(req,res,next,'communications','Business');
					// edx(req,res,next,'accounting','Business');
					// edx(req,res,next,'law','Business');
					// edx(req,res,next,'finance%20and%20banking','Business');
					// edx(req,res,next,'excel','Business');

					// udemy(req,res,next,'human+resources','Business');
					// udemy(req,res,next,'operations','Business');
					// udemy(req,res,next,'ecommerce','Business');
					// udemy(req,res,next,'leadership+and+management','Business');
					// udemy(req,res,next,'entrepreneurship','Business');
					// udemy(req,res,next,'project+management','Business');
					// udemy(req,res,next,'sales','Business');
					// udemy(req,res,next,'finance','Business');
					// udemy(req,res,next,'tourism+and+hospitality','Business');
					// udemy(req,res,next,'communications','Business');
					// udemy(req,res,next,'accounting','Business');
					// udemy(req,res,next,'law','Business');
					// udemy(req,res,next,'finance+and+banking','Business');
					// udemy(req,res,next,'excel','Business');
					
					// udacity(req,res,next,'human%20resources','Business');
					// udacity(req,res,next,'operations','Business');
					// udacity(req,res,next,'ecommerce','Business');
					// udacity(req,res,next,'leadership%20and%20management','Business');
					// udacity(req,res,next,'entrepreneurship','Business');
					// udacity(req,res,next,'project%20management','Business');
					// udacity(req,res,next,'sales','Business');
					// udacity(req,res,next,'finance','Business');
					// udacity(req,res,next,'tourism%20and%20hospitality','Business');
					// udacity(req,res,next,'communications','Business');
					// udacity(req,res,next,'accounting','Business');
					// udacity(req,res,next,'law','Business');
					// udacity(req,res,next,'finance%20and%20banking','Business');
					// udacity(req,res,next,'excel','Business');
	
	console.log('Inside Business');
	res.status(200).json({
		message:'Search Results for /Business !'
		// query: query.q,
	});
});

//8
router.get('/Software',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });

					// coursera(req,res,next,'frontend','Software');
					// coursera(req,res,next,'backend','Software');
					// coursera(req,res,next,'software%20testing','Software');
					// coursera(req,res,next,'operating%20system','Software');

					// edx(req,res,next,'frontend','Software');
					// edx(req,res,next,'backend','Software');
					// edx(req,res,next,'software%20testing','Software');
					// edx(req,res,next,'operating%20system','Software');

					// udemy(req,res,next,'frontend','Software');
					// udemy(req,res,next,'backend','Software');
					// udemy(req,res,next,'software+testing','Software');
					// udemy(req,res,next,'operating+system','Software');

					// udacity(req,res,next,'frontend','Software');
					// udacity(req,res,next,'backend','Software');
					// udacity(req,res,next,'software%20testing','Software');
					// udacity(req,res,next,'operating%20system','Software');
	
	console.log('Inside Software');
	res.status(200).json({
		message:'Search Results for /Software !'
		// query: query.q,
	});
});

//9
router.get('/Lifestyle',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });
					// coursera(req,res,next,'food%20and%20beverage','Lifestyle');
					// coursera(req,res,next,'art%20and%20crafts','Lifestyle');
					// coursera(req,res,next,'music','Lifestyle');
					// coursera(req,res,next,'literature','Lifestyle');
					// coursera(req,res,next,'skilled%20trades','Lifestyle');
					// coursera(req,res,next,'photography','Lifestyle');

					// edx(req,res,next,'food%20and%20beverage','Lifestyle');
					// edx(req,res,next,'art%20and%20crafts','Lifestyle');
					// edx(req,res,next,'music','Lifestyle');
					// edx(req,res,next,'literature','Lifestyle');
					// edx(req,res,next,'skilled%20trades','Lifestyle');
					// edx(req,res,next,'photography','Lifestyle');

					// udemy(req,res,next,'food+and+beverage','Lifestyle');
					// udemy(req,res,next,'art+and+crafts','Lifestyle');
					// udemy(req,res,next,'music','Lifestyle');
					// udemy(req,res,next,'literature','Lifestyle');
					// udemy(req,res,next,'skilled+trades','Lifestyle');
					// udemy(req,res,next,'photography','Lifestyle');
	
	console.log('Inside Lifestyle');
	res.status(200).json({
		message:'Search Results for /Lifestyle !'
		// query: query.q,
	});
});

//11
router.get('/Operations',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });
					// coursera(req,res,next,'supply%20chain%20management','Operations');
					// coursera(req,res,next,'business%20process%20management','Operations');
					// coursera(req,res,next,'risk%20management','Operations');
					// coursera(req,res,next,'service%20management','Operations');
					// coursera(req,res,next,'management%20and%20administration','Operations');
					// coursera(req,res,next,'customer%20service','Operations');
					// coursera(req,res,next,'manufacturing','Operations');
					// coursera(req,res,next,'health%20and%20safety','Operations');
					// coursera(req,res,next,'quality%20control','Operations');
					// coursera(req,res,next,'workplace%20supervision','Operations');
					// coursera(req,res,next,'critical%20operations','Operations');
					// coursera(req,res,next,'food%20technology','Operations');

					// edx(req,res,next,'supply%20chain%20management','Operations');
					// edx(req,res,next,'business%20process%20management','Operations');
					// edx(req,res,next,'risk%20management','Operations');
					// edx(req,res,next,'service%20management','Operations');
					// edx(req,res,next,'management%20and%20administration','Operations');
					// edx(req,res,next,'customer%20service','Operations');
					// edx(req,res,next,'manufacturing','Operations');
					// edx(req,res,next,'health%20and%20safety','Operations');
					// edx(req,res,next,'quality%20control','Operations');
					// edx(req,res,next,'workplace%20supervision','Operations');
					// edx(req,res,next,'critical%20operations','Operations');
					// edx(req,res,next,'food%20technology','Operations');

					// udemy(req,res,next,'supply+chain+management','Operations');
					// udemy(req,res,next,'business+process+management','Operations');
					// udemy(req,res,next,'risk+management','Operations');
					// udemy(req,res,next,'service+management','Operations');
					// udemy(req,res,next,'management+and+administration','Operations');
					// udemy(req,res,next,'customer+service','Operations');
					// udemy(req,res,next,'manufacturing','Operations');
					// udemy(req,res,next,'health+and+safety','Operations');
					// udemy(req,res,next,'quality+control','Operations');
					// udemy(req,res,next,'workplace+supervision','Operations');
					// udemy(req,res,next,'quality+control','Operations');
					// udemy(req,res,next,'quality+control','Operations');

					// udacity(req,res,next,'supply%20chain%20management','Operations');
					// udacity(req,res,next,'business%20process%20management','Operations');
					// udacity(req,res,next,'risk%20management','Operations');
					// udacity(req,res,next,'service%20management','Operations');
					// udacity(req,res,next,'management%20and%20administration','Operations');
					// udacity(req,res,next,'customer%20service','Operations');
					// udacity(req,res,next,'manufacturing','Operations');
					// udacity(req,res,next,'health%20and%20safety','Operations');
					// udacity(req,res,next,'quality%20control','Operations');
					// udacity(req,res,next,'workplace%20supervision','Operations');
					// udacity(req,res,next,'critical%20operations','Operations');
					// udacity(req,res,next,'food%20technology','Operations');

					
	
	console.log('Inside Operations');
	res.status(200).json({
		message:'Search Results for /Operations !'
		// query: query.q,
	});
});

//12
router.get('/DataScience',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });
					// coursera(req,res,next,'data%20structures%20and%20algorithms','DataScience');
					// coursera(req,res,next,'python','DataScience');
					// coursera(req,res,next,'javascript','DataScience');
					// coursera(req,res,next,'java','DataScience');
					// coursera(req,res,next,'android%20development','DataScience');
					// coursera(req,res,next,'C','DataScience');
					// coursera(req,res,next,'C++','DataScience');
					// coursera(req,res,next,'php','DataScience');
					// coursera(req,res,next,'sql','DataScience');
					// coursera(req,res,next,'statistics','DataScience');
					// coursera(req,res,next,'machine%20learning','DataScience');
					// coursera(req,res,next,'artificial%20intelligence','DataScience');
					// coursera(req,res,next,'SAP','DataScience');

					// edx(req,res,next,'data%20structures%20and%20algorithms','DataScience');
					// edx(req,res,next,'python','DataScience');
					// edx(req,res,next,'javascript','DataScience');
					// edx(req,res,next,'java','DataScience');
					// edx(req,res,next,'android%20development','DataScience');
					// edx(req,res,next,'C','DataScience');
					// edx(req,res,next,'C++','DataScience');
					// edx(req,res,next,'php','DataScience','DataScience');
					// edx(req,res,next,'sql');
					// edx(req,res,next,'statistics','DataScience');
					// edx(req,res,next,'machine%20learning','DataScience');
					// edx(req,res,next,'artificial%20intelligence','DataScience');
					// edx(req,res,next,'SAP','DataScience');

					// udemy(req,res,next,'data+structures+and+algorithms','DataScience');
					// udemy(req,res,next,'python','DataScience');
					// udemy(req,res,next,'javascript','DataScience');
					// udemy(req,res,next,'java','DataScience');
					// udemy(req,res,next,'android+development','DataScience');
					// udemy(req,res,next,'C','DataScience');
					// udemy(req,res,next,'C++','DataScience');
					// udemy(req,res,next,'php','DataScience');
					// udemy(req,res,next,'sql','DataScience');
					// udemy(req,res,next,'statistics','DataScience');
					// udemy(req,res,next,'machine+learning','DataScience');
					// udemy(req,res,next,'artificial+intelligence','DataScience');
					// udemy(req,res,next,'SAP','DataScience');

					// udacity(req,res,next,'data%20structures%20and%20algorithms','DataScience');
					// udacity(req,res,next,'python','DataScience');
					// udacity(req,res,next,'javascript','DataScience');
					// udacity(req,res,next,'java','DataScience');
					// udacity(req,res,next,'android%20development','DataScience');
					// udacity(req,res,next,'C','DataScience');
					// udacity(req,res,next,'C++','DataScience','DataScience');
					// udacity(req,res,next,'php','DataScience');
					// udacity(req,res,next,'sql','DataScience');
					// udacity(req,res,next,'statistics','DataScience');
					// udacity(req,res,next,'machine%20learning','DataScience');
					// udacity(req,res,next,'artificial%20intelligence','DataScience');
					// udacity(req,res,next,'SAP','DataScience');
	
	console.log('Inside DataScience');
	res.status(200).json({
		message:'Search Results for /DataScience !'
		// query: query.q,
	});
});

//13
router.get('/Design',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });
					// coursera(req,res,next,'web%20design','Design');
					// coursera(req,res,next,'graphic%20design','Design');
					// coursera(req,res,next,'user%20experience','Design');
					// coursera(req,res,next,'game%20design','Design');
					// coursera(req,res,next,'3d%20animation','Design');
					// coursera(req,res,next,'fashion%20designing','Design');
					// coursera(req,res,next,'architectural%20design','Design');
					// coursera(req,res,next,'interior%20design','Design');
					// coursera(req,res,next,'video%20making','Design');
					// coursera(req,res,next,'pencil%20sketching%20and%20drawing','Design');
					// coursera(req,res,next,'film%20editing','Design');
					// coursera(req,res,next,'pen%20sketching','Design');

					// edx(req,res,next,'web%20design','Design');
					// edx(req,res,next,'graphic%20design','Design');
					// edx(req,res,next,'user%20experience','Design');
					// edx(req,res,next,'game%20design','Design');
					// edx(req,res,next,'3d%20animation','Design');
					// edx(req,res,next,'fashion%20designing','Design');
					// edx(req,res,next,'architectural%20design','Design');
					// edx(req,res,next,'interior%20design','Design');
					// edx(req,res,next,'video%20making','Design');
					// edx(req,res,next,'pencil%20sketching%20and%20drawing','Design');
					// edx(req,res,next,'film%20editing','Design');
					// edx(req,res,next,'pen%20sketching','Design');

					// udemy(req,res,next,'web+design','Design');
					// udemy(req,res,next,'graphic+design','Design');
					// udemy(req,res,next,'user+experience','Design');
					// udemy(req,res,next,'game+design','Design');
					// udemy(req,res,next,'3d+animation','Design');
					// udemy(req,res,next,'fashion+designing','Design');
					// udemy(req,res,next,'architectural+design','Design','Design');
					// udemy(req,res,next,'interior+design');
					// udemy(req,res,next,'video+making','Design');
					// udemy(req,res,next,'pencil+sketching+and+drawing','Design');
					// udemy(req,res,next,'film+editing','Design');
					// udemy(req,res,next,'pen+sketching','Design');

					// skillshare(req,res,next,'web%20design','Design');
					// skillshare(req,res,next,'graphic%20design','Design');
					// skillshare(req,res,next,'user%20experience','Design');
					// skillshare(req,res,next,'game%20design','Design');
					// skillshare(req,res,next,'3d%20animation','Design');
					// skillshare(req,res,next,'fashion%20designing','Design');
					// skillshare(req,res,next,'architectural%20design','Design');
					// skillshare(req,res,next,'interior%20design','Design');
					// skillshare(req,res,next,'video%20making','Design');
					// skillshare(req,res,next,'pencil%20sketching%20and%20drawing','Design');
					// skillshare(req,res,next,'film%20editing','Design');
					// skillshare(req,res,next,'pen%20sketching','Design');

	
	console.log('Inside Design');
	res.status(200).json({
		message:'Search Results for /Design !'
		// query: query.q,
	});
});

//14
// router.get('/Marketing',udemy,coursera,edx,udacity,digigrad,(req, res, next) =>{
	router.get('/Marketing',(req, res, next) =>{
					// const query = new Search({
					// 	q: req.body.q
					// });

					// coursera(req,res,next,'digital%20marketing','Marketing');
					// coursera(req,res,next,'SEO','Marketing');
					// coursera(req,res,next,'social%20media%20marketing','Marketing');
					// coursera(req,res,next,'brand%20creation','Marketing');
					// coursera(req,res,next,'public%20relations','Marketing');
					// coursera(req,res,next,'advertising','Marketing');
					// coursera(req,res,next,'video%20and%20mobile%20marketing','Marketing');
					// coursera(req,res,next,'growth%20hacking','Marketing');
					// coursera(req,res,next,'affiliate%20marketing','Marketing');

					// edx(req,res,next,'digital%20marketing','Marketing');
					// edx(req,res,next,'SEO','Marketing');
					// edx(req,res,next,'social%20media%20marketing','Marketing');
					// edx(req,res,next,'brand%20creation','Marketing');
					// edx(req,res,next,'public%20relations','Marketing');
					// edx(req,res,next,'advertising','Marketing');
					// edx(req,res,next,'video%20and%20mobile%20marketing','Marketing');
					// edx(req,res,next,'growth%20hacking','Marketing');
					// edx(req,res,next,'affiliate%20marketing','Marketing');

					// udacity(req,res,next,'digital%20marketing','Marketing');
					// udacity(req,res,next,'SEO','Marketing');
					// udacity(req,res,next,'social%20media%20marketing','Marketing');
					// udacity(req,res,next,'brand%20creation','Marketing');
					// udacity(req,res,next,'public%20relations','Marketing');
					// udacity(req,res,next,'advertising','Marketing');
					// udacity(req,res,next,'video%20and%20mobile%20marketing','Marketing');
					// udacity(req,res,next,'growth%20hacking','Marketing');
					// udacity(req,res,next,'affiliate%20marketing','Marketing');

	console.log('Inside Marketing');
	res.status(200).json({
		message:'Search Results for marketing !'
		// query: query.q,
	});
}
);


module.exports = router;
	