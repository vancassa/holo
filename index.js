const { getSubscribers } = require("./holosub");
const fs = require("fs");
const schedule = require("node-schedule");

const saveSubsData = async () => {
  const subs = await getSubscribers();

  console.log("subs", subs);
  const date = new Date();

  fs.writeFile(`history/${date.toISOString()}.json`, JSON.stringify(subs), (err) => {
    if (err) throw err;
    console.log("Data saved.");
  });
};

schedule.scheduleJob("0 0 * * *", () => {
  saveSubsData();
}); // run everyday at midnight
