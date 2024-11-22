const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const routes = [
    "audi-a1",
    "audi-a3",
    "blog",
    "category/driving-tips",
    "category/uncategorized",
    "ce-masina-ti-ar-placea-sa-conduci",
    "comments/feed",
    "contacteaza-ne",
    "cookie/consent_prompt",
    "de-ce-sa-alegi-scoala-de-soferi-drive-safe",
    "de-ce-sa-faci-scoala-de-soferi-pe-un-crossover",
    "despre-noi",
    "faqs",
    "kia-ceed-2020",
    "mercedes-a-class-2018",
    "mercedes-a-class-2020",
    "modalitati-de-plata",
    "opel-mokka",
    "peugeot-208-2024",
    "pregatire-suplimentara",
    "renault-clio-2",
    "renault-megane",
    "sfaturi-pentru-examenul-auto",
    "skoda-rapid",
    "team/alberto-da-silva",
    "team/bret-ke-danielle",
    "team/francine-floreani",
    "top-5-greseli-de-evitat-pentru-scoala-de-soferi",
    "toyota-ch-r-2022",
    "toyota-rav-4-2023",
    "volkswagen-golf",
    "volkswagen-golf-8-2023"
]

app.get('/', (req, res) => {
    res.render('index.ejs');
});

routes.forEach(route => {
    console.log(route);
    app.get(`/${route}`, (req, res) => {
        res.render(`${route}/index.ejs`);
    });
});

app.get('/*', (req, res) => {
    res.render('404.ejs');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});