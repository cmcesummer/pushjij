module.exports = function create(html) {
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

    </style>
</head>
<body>
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