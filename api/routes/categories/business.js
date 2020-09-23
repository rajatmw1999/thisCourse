const express = require('express');
const router = express.Router();

const apnacourse = require('../../middleware/apnacourse');
const arcademics = require('../../middleware/arcademics');
const bitdegree = require('../../middleware/bitdegree');
const codecademy = require('../../middleware/codeacademy');
const coursera = require('../../middleware/coursera');
const digigrad = require('../../middleware/digigrad');
const edx = require('../../middleware/edx');
const harvard = require('../../middleware/harvard');
const khanacademy = require('../../middleware/khanAcademy');
const openyale = require('../../middleware/openYale');
const skillshare = require('../../middleware/skillshare');
const udacity = require('../../middleware/udacity');
const udemy = require('../../middleware/udemy');
const verbling = require('../../middleware/verbling');

//Skills not working
// codecademy(req,res,next,'stockTrading','business');
// udemy(req,res,next,'stockTrading','business');
// bitdegree(req,res,next,'Tally ','business');
// udacity(req,res,next,'Book Keeping','business');
// udacity(req,res,next,'Public Speaking','business');
// bitdegree(req,res,next,'Leadership','business');
// udemy(req,res,next,'Leadership','business');
//  coursera(req,res,next,'Supply Chains','business');
// udacity(req,res,next,'Supply Chains','business');
//  coursera(req,res,next,'Hiring','business');
// bitdegree(req,res,next,'Conflict Resolution','business');
// bitdegree(req,res,next,'Podcast','business');
//  coursera(req,res,next,'Journalism','business');
// udacity(req,res,next,'Journalism','business');
// udemy(req,res,next,'Journalism','business');
// udacity(req,res,next,'Amazon Kindle','business');
router.get("/",(req,res,next) => {
    // arcademics(req,res,next,'stockTrading','business');
    // bitdegree(req,res,next,'stockTrading','business');
    //  coursera(req,res,next,'stockTrading','business');
    // edx(req,res,next,'stockTrading','business');
    // khanacademy(req,res,next,'stockTrading','business');
    // skillshare(req,res,next,'stockTrading','business');
    // udacity(req,res,next,'stockTrading','business');

    // arcademics(req,res,next,'Investing','business');
    // bitdegree(req,res,next,'Investing','business');
    //  coursera(req,res,next,'Investing','business');
    // edx(req,res,next,'Investing','business');
    // khanacademy(req,res,next,'Investing','business');
    // skillshare(req,res,next,'Investing','business');
    // udacity(req,res,next,'Investing','business');
    // udemy(req,res,next,'Investing','business');

    // arcademics(req,res,next,'Accounting ','business');
    // bitdegree(req,res,next,'Accounting ','business');
    //  coursera(req,res,next,'Accounting ','business');
    // edx(req,res,next,'Accounting ','business');
    // khanacademy(req,res,next,'Accounting ','business');
    // skillshare(req,res,next,'Accounting ','business');
    // udacity(req,res,next,'Accounting ','business');
    // udemy(req,res,next,'Accounting ','business');

    // arcademics(req,res,next,'Excel ','business');
    // bitdegree(req,res,next,'Excel ','business');
    //  coursera(req,res,next,'Excel ','business');
    // edx(req,res,next,'Excel ','business');
    // khanacademy(req,res,next,'Excel ','business');
    // skillshare(req,res,next,'Excel ','business');
    // udacity(req,res,next,'Excel ','business');
    // udemy(req,res,next,'Excel ','business');

    // arcademics(req,res,next,'Financial Analysis ','business');
    // bitdegree(req,res,next,'Financial Analysis ','business');
    //  coursera(req,res,next,'Financial Analysis ','business');
    // edx(req,res,next,'Financial Analysis ','business');
    // khanacademy(req,res,next,'Financial Analysis ','business');
    // skillshare(req,res,next,'Financial Analysis ','business');
    // udacity(req,res,next,'Financial Analysis ','business');
    // udemy(req,res,next,'Financial Analysis ','business');

    // arcademics(req,res,next,'Tally ','business');
    //  coursera(req,res,next,'Tally ','business');
    // edx(req,res,next,'Tally ','business');
    // khanacademy(req,res,next,'Tally ','business');
    // skillshare(req,res,next,'Tally ','business');
    // udacity(req,res,next,'Tally ','business');
    // udemy(req,res,next,'Tally ','business');

    // arcademics(req,res,next,'Book Keeping','business');
    // bitdegree(req,res,next,'Book Keeping','business');
    //  coursera(req,res,next,'Book Keeping','business');
    // edx(req,res,next,'Book Keeping','business');
    // khanacademy(req,res,next,'Book Keeping','business');
    // skillshare(req,res,next,'Book Keeping','business');
    // udemy(req,res,next,'Book Keeping','business');

    // arcademics(req,res,next,'Writing','business');
    // bitdegree(req,res,next,'Writing','business');
    //  coursera(req,res,next,'Writing','business');
    // edx(req,res,next,'Writing','business');
    // khanacademy(req,res,next,'Writing','business');
    // skillshare(req,res,next,'Writing','business');
    // udacity(req,res,next,'Writing','business');
    // udemy(req,res,next,'Writing','business');

    // arcademics(req,res,next,'Public Speaking','business');
    // bitdegree(req,res,next,'Public Speaking','business');
    //  coursera(req,res,next,'Public Speaking','business');
    // edx(req,res,next,'Public Speaking','business');
    // khanacademy(req,res,next,'Public Speaking','business');
    // skillshare(req,res,next,'Public Speaking','business');
    // udemy(req,res,next,'Public Speaking','business');
    
    // arcademics(req,res,next,'Selling','business');
    // bitdegree(req,res,next,'Selling','business');
    //  coursera(req,res,next,'Selling','business');
    // edx(req,res,next,'Selling','business');
    // khanacademy(req,res,next,'Selling','business');
    // skillshare(req,res,next,'Selling','business');
    // udacity(req,res,next,'Selling','business');
    // udemy(req,res,next,'Selling','business');

    // arcademics(req,res,next,'Technical Writing','business');
    // bitdegree(req,res,next,'Technical Writing','business');
    //  coursera(req,res,next,'Technical Writing','business');
    // edx(req,res,next,'Technical Writing','business');
    // khanacademy(req,res,next,'Technical Writing','business');
    // skillshare(req,res,next,'Technical Writing','business');
    // udacity(req,res,next,'Technical Writing','business');
    // udemy(req,res,next,'Technical Writing','business');

    // arcademics(req,res,next,'Presentational Skills','business');
    // bitdegree(req,res,next,'Presentational Skills','business');
    //  coursera(req,res,next,'Presentational Skills','business');
    // edx(req,res,next,'Presentational Skills','business');
    // khanacademy(req,res,next,'Presentational Skills','business');
    // skillshare(req,res,next,'Presentational Skills','business');
    // udacity(req,res,next,'Presentational Skills','business');
    // udemy(req,res,next,'Presentational Skills','business');

    // arcademics(req,res,next,'Product Management','business');
    // bitdegree(req,res,next,'Product Management','business');
    //  coursera(req,res,next,'Product Management','business');
    // edx(req,res,next,'Product Management','business');
    // khanacademy(req,res,next,'Product Management','business');
    // skillshare(req,res,next,'Product Management','business');
    // udacity(req,res,next,'Product Management','business');
    // udemy(req,res,next,'Product Management','business');

    // arcademics(req,res,next,'Risk Management','business');
    // bitdegree(req,res,next,'Risk Management','business');
    //  coursera(req,res,next,'Risk Management','business');
    // edx(req,res,next,'Risk Management','business');
    // khanacademy(req,res,next,'Risk Management','business');
    // skillshare(req,res,next,'Risk Management','business');
    // udacity(req,res,next,'Risk Management','business');
    // udemy(req,res,next,'Risk Management','business');

    // arcademics(req,res,next,'Business Process','business');
    // bitdegree(req,res,next,'Business Process','business');
    //  coursera(req,res,next,'Business Process','business');
    // edx(req,res,next,'Business Process','business');
    // khanacademy(req,res,next,'Business Process','business');
    // skillshare(req,res,next,'Business Process','business');
    // udacity(req,res,next,'Business Process','business');
    // udemy(req,res,next,'Business Process','business');

    // arcademics(req,res,next,'Leadership','business');
    //  coursera(req,res,next,'Leadership','business');
    // edx(req,res,next,'Leadership','business');
    // khanacademy(req,res,next,'Leadership','business');
    // skillshare(req,res,next,'Leadership','business');
    // udacity(req,res,next,'Leadership','business');
    
    // arcademics(req,res,next,'Supply Chains','business');
    // bitdegree(req,res,next,'Supply Chains','business');
    // edx(req,res,next,'Supply Chains','business');
    // khanacademy(req,res,next,'Supply Chains','business');
    // skillshare(req,res,next,'Supply Chains','business');
    // udemy(req,res,next,'Supply Chains','business');

    // arcademics(req,res,next,'PMP','business');
    // bitdegree(req,res,next,'PMP','business');
    //  coursera(req,res,next,'PMP','business');
    // edx(req,res,next,'PMP','business');
    // khanacademy(req,res,next,'PMP','business');
    // skillshare(req,res,next,'PMP','business');
    // udacity(req,res,next,'PMP','business');
    // udemy(req,res,next,'PMP','business');
    
    // arcademics(req,res,next,'Agile','business');
    // bitdegree(req,res,next,'Agile','business');
    //  coursera(req,res,next,'Agile','business');
    // edx(req,res,next,'Agile','business');
    // khanacademy(req,res,next,'Agile','business');
    // skillshare(req,res,next,'Agile','business');
    // udacity(req,res,next,'Agile','business');
    // udemy(req,res,next,'Agile','business');

    // arcademics(req,res,next,'Hiring','business');
    // bitdegree(req,res,next,'Hiring','business');
    // edx(req,res,next,'Hiring','business');
    // khanacademy(req,res,next,'Hiring','business');
    // skillshare(req,res,next,'Hiring','business');
    // udacity(req,res,next,'Hiring','business');
    // udemy(req,res,next,'Hiring','business');

    // arcademics(req,res,next,'Emotional Intelligence','business');
    // bitdegree(req,res,next,'Emotional Intelligence','business');
    //  coursera(req,res,next,'Emotional Intelligence','business');
    // edx(req,res,next,'Emotional Intelligence','business');
    // khanacademy(req,res,next,'Emotional Intelligence','business');
    // skillshare(req,res,next,'Emotional Intelligence','business');
    // udacity(req,res,next,'Emotional Intelligence','business');
    // udemy(req,res,next,'Emotional Intelligence','business');

    // arcademics(req,res,next,'Conflict Resolution','business');
    //  coursera(req,res,next,'Conflict Resolution','business');
    // edx(req,res,next,'Conflict Resolution','business');
    // khanacademy(req,res,next,'Conflict Resolution','business');
    // skillshare(req,res,next,'Conflict Resolution','business');
    // udacity(req,res,next,'Conflict Resolution','business');
    // udemy(req,res,next,'Conflict Resolution','business');

    // arcademics(req,res,next,'Talent Management','business');
    // bitdegree(req,res,next,'Talent Management','business');
    //  coursera(req,res,next,'Talent Management','business');
    // edx(req,res,next,'Talent Management','business');
    // khanacademy(req,res,next,'Talent Management','business');
    // skillshare(req,res,next,'Talent Management','business');
    // udacity(req,res,next,'Talent Management','business');
    // udemy(req,res,next,'Talent Management','business');

    // arcademics(req,res,next,'Podcast','business');    
    //  coursera(req,res,next,'Podcast','business');
    // edx(req,res,next,'Podcast','business');
    // khanacademy(req,res,next,'Podcast','business');
    // skillshare(req,res,next,'Podcast','business');
    // udacity(req,res,next,'Podcast','business');
    // udemy(req,res,next,'Podcast','business');

    // arcademics(req,res,next,'Youtube','business');
    // bitdegree(req,res,next,'Youtube','business');
    //  coursera(req,res,next,'Youtube','business');
    // edx(req,res,next,'Youtube','business');
    // khanacademy(req,res,next,'Youtube','business');
    // skillshare(req,res,next,'Youtube','business');
    // udacity(req,res,next,'Youtube','business');
    // udemy(req,res,next,'Youtube','business');

    // arcademics(req,res,next,'Journalism','business');
    // bitdegree(req,res,next,'Journalism','business');
    // edx(req,res,next,'Journalism','business');
    // khanacademy(req,res,next,'Journalism','business');
    // skillshare(req,res,next,'Journalism','business');
    

    // arcademics(req,res,next,'SEO','business');
    // bitdegree(req,res,next,'SEO','business');
    //  coursera(req,res,next,'SEO','business');
    // edx(req,res,next,'SEO','business');
    // khanacademy(req,res,next,'SEO','business');
    // skillshare(req,res,next,'SEO','business');
    // udacity(req,res,next,'SEO','business');
    // udemy(req,res,next,'SEO','business');

    // arcademics(req,res,next,'Amazon Kindle','business');
    // bitdegree(req,res,next,'Amazon Kindle','business');
    //  coursera(req,res,next,'Amazon Kindle','business');
    // edx(req,res,next,'Amazon Kindle','business');
    // khanacademy(req,res,next,'Amazon Kindle','business');
    // skillshare(req,res,next,'Amazon Kindle','business');
    // udemy(req,res,next,'Amazon Kindle','business');

    // arcademics(req,res,next,'Adobe','business');
    // bitdegree(req,res,next,'Adobe','business');
    //  coursera(req,res,next,'Adobe','business');
    // edx(req,res,next,'Adobe','business');
    // khanacademy(req,res,next,'Adobe','business');
    // skillshare(req,res,next,'Adobe','business');
    // udacity(req,res,next,'Adobe','business');
    // udemy(req,res,next,'Adobe','business');

    
    

    console.log('Inside Business');
	res.status(200).json({
		message:'Search Results for business !'
		// query: query.q,
	});
});

module.exports = router;