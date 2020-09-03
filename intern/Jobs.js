const puppeteer = require("puppeteer");

async function getElText(page, selector) {
  return await page.evaluate((selector) => {
    return document.querySelector(selector).innerText;
  }, selector);
}

var Jobs = [];

(async () => {
  for (let pageno = 0; pageno < 9; pageno++) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1299, height: 637 });

    const navigationPromise = page.waitForNavigation();

    await page.goto(
      `https://www.amazon.jobs/en/business_categories/student-programs?offset=${
        pageno * 10
      }&result_limit=10`
    );
    await page.waitForSelector("h1.title");
    await page.evaluate((_) => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitFor(2000);
    await page.waitForSelector("h3.job-title");
    await navigationPromise;

    for (let i = 1; i < 11; i++) {
      const jobDetails = {};
      const jobTitle = `.job-tile:nth-child(${i}) > .job-link > .job > .row > .info > .job-title`;
      const jobId = `.job-tile:nth-child(${i}) > .job-link > .job > .row > .info > .location-and-id`;
      // const jobDescription = `.job-tile:nth-child(${i}) > .job-link > .job > .row > .description > span:nth-child(1)`;

      await page.waitForSelector(jobTitle);
      const title = await getElText(page, jobTitle);
      jobDetails.title = title;

      await page.waitForSelector(jobId);
      const id = await getElText(page, jobId);
      jobDetails.id = id;

      // await page.waitForSelector(jobDescription);
      // const description = await getElText(page, jobDescription);
      // jobDetails.description = description;
      var jobTitleDash = jobDetails.title;
      jobTitleDash = title.replace(/\s+/g, "-").toLowerCase();
      jobTitleDash = jobTitleDash.replace(/-{2,}/g, "-");

      var jobIdUrl = id.indexOf("ID:");
      jobDetails.Url = `https://www.amazon.jobs/en/jobs/${id.slice(
        jobIdUrl + 4
      )}/${jobTitleDash}`;
      if (title && id) {
        // console.log(`Title : ${title}`);
        // console.log(`Id : ${id}`);
        // console.log(`Description : ${description}`);
        Jobs.push(jobDetails);
      }
      if (pageno == 8 && i == 8) {
        break;
      }
    }

    // console.log(Jobs);
    await browser.close();
  }
})().then(function () {
  for (var key in Jobs) {
    console.log(key + " -> " + Jobs[key]["Url"]);
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(Jobs[key]["Url"]);

      await page.waitFor(2000);
      await page.waitForSelector(".section description");
      await navigationPromise;

      const jobddescription = `.row > .col-12 > .content > .description > p`;

      await page.waitForSelector(jobddescription);
      jobescription = await getElText(page, jobddescription);
      jobDetails.ddescription = jobescription;

      /* Outputting what we scraped */
      // console.log(data);

      await browser.close();
    })();

    console.log(key + " -> " + Jobs[key]["title"]);
    console.log(key + " -> " + Jobs[key]["ddescription"]);
  }
});
