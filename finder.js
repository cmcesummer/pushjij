const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const $http = require("superagent");

const jsonpName = "jQue971656";

const core = {
  yesterday: function (JIU, fn) {
    $http
      .get(
        `https://fundmobapi.eastmoney.com/FundMApi/FundBaseTypeInformation.ashx?callback=${jsonpName}&FCODE=${JIU}&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&Uid=&_=${Date.now()}`
      )
      .set(
        "User-Agent",
        "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36"
      )
      .then((res) => {
        if (res.status != 200) throw res.status;

        const d = res.text.substring(jsonpName.length + 1, res.text.length - 1);
        const map = JSON.parse(d).Datas;

        fn && typeof fn === "function" && fn({ r: map.RZDF, name: map.SHORTNAME, map });
      })
      .catch((err) => console.log(err));
  },
  day: function (JIU, fn) {
    $http
      .get(
        `https://fundmobapi.eastmoney.com/FundMApi/FundValuationDetail.ashx?callback=${jsonpName}&FCODE=${JIU}&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&Uid=&_=${Date.now()}`
      )
      .set(
        "User-Agent",
        "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36"
      )
      .then((res) => {
        if (res.status != 200) throw res.status;

        const d = res.text.substring(jsonpName.length + 1, res.text.length - 1);
        const map = JSON.parse(d).Datas;

        fn && typeof fn === "function" && fn({ map });
      })
      .catch((err) => console.log(err));
  },
};

module.exports = function find(id) {
  return new Promise((resolve, reject) => {
    core.yesterday(id, ({ r, name }) => {

      let msg = `<td>${name}</td><td>${r}</td>`;
      core.day(id, ({ map }) => {
        const cache = map[0];
        msg += `<td>${cache.gszzl}</td><td>${cache.gsz}</td><td>${cache.gztime}</td>`;
        resolve(msg);
      });
    });
  });
};
