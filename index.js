const path = require("path");
const fs = require("fs");
const finder = require("./finder");

const argv = process.argv.splice(2);

console.log(argv[0]);

console.log(JSON.parse(argv[0]));

// function sleep(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// (async () => {
//   const configString = JSON.parse(fs.readFileSync(path.join(__dirname, "./config.json"), "utf8"));
//   const keys = Object.keys(configString);

//   for (const key of keys) {
//     await sleep(1000);
//     let sendMsg = "";
//     const fund = configString[key];
//     for (const id of fund) {
//       const msg = await finder(id);
//       sendMsg += msg + `   ============   \n   `;
//       await sleep(500);
//     }
//     // sender(key, "", sendMsg);
//     console.log(sendMsg);
//   }
// })();
// timer(() => {
//   console.log(Date.now());
// });
