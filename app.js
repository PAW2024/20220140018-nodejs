const express = require('express'); // Mengimport express
const app = express();
const port = 3000;

// Mengatur view engine sebagai ejs
app.set('view engine', 'ejs');

// Mengirimkan file index.ejs saat root URL diakses
app.get('/', (req, res) => {
    res.render('index');
});

// Mengirimkan file contact.ejs saat /contact URL diakses
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`); // Menggunakan backticks untuk template literals
});
