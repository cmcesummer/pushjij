const schedule = require("node-schedule");

const rule = new schedule.RecurrenceRule();
rule.minute = [1, 11, 21, 31, 41, 51];

module.exports = function (fn) {
    const mainScheduleId = schedule.scheduleJob(rule, () => {
        fn && typeof fn === "function" && fn();
    });
    return () => mainScheduleId.cancel();
}