const schedule = require("node-schedule");

module.exports = function (fn) {
  const mainScheduleId = schedule.scheduleJob("10 54 19 * * *", () => {
    // const mainScheduleId = schedule.scheduleJob("30 40 14 * * *", () => {
    fn && typeof fn === "function" && fn();
  });
  return () => mainScheduleId.cancel();
};
