const puppeteer = require("puppeteer");

async function getText(page, selector) {
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

      await page.waitForSelector(jobTitle);
      const title = await getText(page, jobTitle);
      jobDetails.title = title;

      await page.waitForSelector(jobId);
      const id = await getText(page, jobId);
      jobDetails.id = id;

      var jobTitleDash = jobDetails.title;
      jobTitleDash = title.replace(/\s+/g, "-").toLowerCase();
      jobTitleDash = jobTitleDash.replace(/-{2,}/g, "-");

      var jobIdUrl = id.indexOf("ID:");
      jobDetails.Url = `https://www.amazon.jobs/en/jobs/${id.slice(
        jobIdUrl + 4
      )}/${jobTitleDash}`;

      Jobs.push(jobDetails);

      if (pageno == 8 && i == 8) {
        break;
      }
    }

    // console.log(Jobs);//
    await browser.close();
  }
})().then(function () {
  for (var key in Jobs) {
    console.log("S No. -> " + key);
    console.log("Title -> " + Jobs[key]["title"]);
    console.log("Details -> " + Jobs[key]["id"]);
    console.log("URL -> " + Jobs[key]["Url"]);
  }
});
