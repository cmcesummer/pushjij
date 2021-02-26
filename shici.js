const $http = require("superagent");

function createH(body) {
  const html = `<div class="box" >
  <span class="title">「 ${body.origin} 」</span><span class="stamp">${body.author}</span>
  <div class="content"> ${body.content} </div>
  </div>`
  return html
}

const DEFAULT_SHICI = {
  content: '欲买桂花同载酒，终不似、少年游。',
  origin: '唐多令·芦叶满汀洲',
  author: '刘过',
}

function shici() {
  return new Promise(function (resolve, reject) {
    $http.get(
      `https://v1.jinrishici.com/all.json`
    )
    .set(
      "User-Agent",
      "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36"
    )
    .then((res) => {
      if (res.status != 200) {
        return resolve(createH(DEFAULT_SHICI));
      }
      resolve(createH(res.body))
    })
    .catch((err) => {
      resolve(createH(DEFAULT_SHICI));
    });
  })
}


module.exports = shici;