const finder = require("./finder");
const mail = require("./mail");

const argv = process.argv.splice(2);

const person = JSON.parse(argv[0]);
const user = argv[1];
const pass = argv[2];

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

(async () => {
  const keys = Object.keys(person);
  for (const key of keys) {
    await sleep(5000);
    let sendMsg = "";
    const fund = person[key];
    for (const id of fund) {
      const msg = await finder(id);
      sendMsg += msg + `   ============   \n   `;
      await sleep(500);
    }
    console.log(sendMsg);
    mail(user, pass, sendMsg, to);
  }
})();
