const rp = require("request-promise");

const BASE_URL = "https://sc.ftqq.com/";

// const DEVERKEY = "SCU69241T6552f96bf4e378b1896de376635fbad15df89009dc3a5";

module.exports = function send(DEVERKEY, text, desp) {
  rp(`${BASE_URL}${DEVERKEY}.send`, {
    qs: {
      text: `【每日报告】${text}`,
      desp,
    },
  })
    .then(console.log)
    .catch(console.log);
};
