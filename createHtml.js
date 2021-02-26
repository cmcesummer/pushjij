module.exports = function create(html, before) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {box-sizing: border-box;border-collapse: collapse;border-spacing: 0;}
        table {display: block;overflow: auto;width: 100%;}
        table tr {background-color: #fff;border-top: 1px solid #c6cbd1;}
        table th, table td {border: 1px solid #dfe2e5;padding: 6px 13px;}
        table th {font-weight: 600;}
        .box { padding: 20px; box-shadow: 0 0 5px rgba(240,161,168,.3) ; margin-bottom: 20px; display: inline-block; border-radius: 10px;; }
        .title { font-size: 16px; }
        .stamp {font-size: 12px; color: #fff; background-color: #c20000; border-radius: 3px;  margin: .5em;padding: 2px 5px;}
        .content { font-size: 14px; padding-top: 10px; color: rgb(90,18,22) }
    </style>
</head>
<body>
    ${before}
    <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>昨天率</th>
                <th>今天率</th>
                <th>今天价值</th>
                <th>时间</th>
            </tr>
        </thead>
        <tbody>
            ${html}
        </tbody>
    </table>
</body>
</html>
  `
}