'use strict';

// Dependencies
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');
const methodOverride = require('method-override');

// Environmental
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// App Setup
const app = express();
const client = new pg.Client(DATABASE_URL);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Routes

// Functions

// sql queries
`SELECT * FROM table_name WHERE id=$1;`;
`INSERT INTO table_name(name, age, status) VALUES($1, $2, $3);`;
`DELETE FROM table_name WHERE id=$1;`;
`UPDATE table_name SET name=$1, age=$2, status=$3 WHERE id=$4;`;

// client.query
client
  .query(sqlQuery, safeValues)
  .then((results) => {
    res.render('index', { results: results.rows });
  })
  .catch((e) => {
    console.log(e);
  });

// superagent.get
superagent
  .get(url)
  .then((data) => {
    const dataArr = data.body.map((obj) => {
      return new Constructor(obj);
    });
    res.render('pages/data', { data: dataArr });
  })
  .catch((e) => {
    console.log(e);
  });

// Constructors

// Listener
client
  .connect()
  .then(() => {
    app
      .listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}.`);
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .catch((e) => {
    console.log(e);
  });
