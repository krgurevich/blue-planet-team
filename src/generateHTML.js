const fs = require("fs");

// creating HTML
const writeFile = (content) => {
    const HTML = generateHTML(content);
    fs.writeFile("./dist/index.html", HTML, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile is successfully Created!");
        }
    });
};
// Generates Card 
const generateCard = (data) => {
    let card =
        data.map(
            (item) => `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">
        ${item.name} <i class="${item.role === "Manager"
                    ? `fas fa-user-tie`
                    : item.role === "Engineer"
                        ? `fas fa-user-circle`
                        : `fas fa-user-graduate`
                }"></i>
        </h5>
    </div>
    <ul class="list-group">
        <li class="list-group-item">Position: ${item.role}</li>
        <li class="list-group-item">Employee ID: ${item.id}</li>
        <li class="list-group-item">${item.role === "Manager"
                    ? `Office Number: ${item.officeNumber}`
                    : item.role === "Engineer"
                        ? `GitHub Username: <a href="https://github.com/">${item.gitHub}</a>`
                        : `School Name: ${item.school}`
                }</li>
        <li class="list-group-item">Email: <a href="mailto:${item.email}">${item.email
                }</a></li>
    </ul>
</div>
`)
    console.log(card);
    return card.join('');
}

// Generates HTML code
const generateHTML = (data) =>
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" type="text/css" href="./reset.css" />
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <title>Blue Planet Profile Generator</title>
</head>

<body>
    <header>
        <h1>My Team Profile</h1>
    </header>   
    <div class="container-fluid">
    <div class="row">
    ${generateCard(data)}
</div>
</div>
    
        <!-- Script -->
    <script src=" https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
        </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossorigin="anonymous"></script>
    <script type="text/javascript" src="./assets/js/script.js"></script>
</body>
</html>`;

module.exports = writeFile;
