const finder = require("./finder");
const mail = require("./mail");
const chtml = require("./createHtml");
const code = require("./code");
const shici = require("./shici");

const argv = process.argv.splice(2);

const person = argv[0];
// const person = JSON.parse(argv[0]);
const user = argv[1];
const pass = argv[2];

const timestart = Date.now();
console.log(`[timestart]`, timestart)

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

;(async () => {
  const keys = person.split(',');
  let i = 0;
  const beforeText = await shici();
  for (const key of keys) {
    await sleep(5000);
    let sendMsg = "";
    const fund = code[i];
    for (const id of fund) {
      const time1 = Date.now();
      const msg = await finder(id);
      console.log(`[finder use]`, Date.now() - time1);
      sendMsg +=  `<tr>${msg}</tr>`;
      await sleep(500);
    }
    i++;
    mail(user, pass, chtml(sendMsg, beforeText), `"${key}" <${key}>`);
  }
})();