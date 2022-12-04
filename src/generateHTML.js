const fs = require('fs');

const writeFile = (content) => {
  const HTML = generateHTML(content);
  fs.writeFile('./dist/index.html', HTML, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Your team profile is successfully Created!');
    }
  });
};


const generateHTML = (data) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<div>${data.map((item) => (`<p>${item.name}</p>`))}</div>
</body>
</html>`;

module.exports = writeFile;