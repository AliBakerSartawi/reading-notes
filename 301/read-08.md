## SQL

**Structured Query Language** or **SQL** is a language designed to allow users to query, manipulate and transform data from a relational database.

**SQL** databases include SQLite, MySQL, Postgres, Oracle and Microsoft SQL Server... all of them support the main features of **SQL**, yet they can differ in some additional features depending on the type of data it supports.

A **relational database** represents a collection of related (two-dimensional) tables. Each of the tables are similar to an Excel spreadsheet, with a fixed number of named columns (the attributes or properties of the table) and any number of rows of data.

To retrieve data from a SQL database, we need to write **SELECT** statements, which are often colloquially referred to as queries. A query in itself is just a statement which declares what data we are looking for, where to find it in the database, and optionally, how to transform it before it is returned.

---

## Database Connecting Steps

Install `pg` package.

Require it.

Create instance of it.

Create `DATABASE_URL`.

Inserting `schema` or `seed` file into local database 

```
psql -d database_name -f schema.sql /or/ seed.sql
```

It is okay if the `schema` or `seed` file is inside deeper directories and not in the root.

---

```javascript
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
```

---

## Links

- [SQLBolt](https://sqlbolt.com/)

- [w3schools Practice](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all)

- [A Primer On SQL - Book](https://openlibra.com/en/book/a-primer-on-sql-3rd-edition)

- [SQL Cheat Sheet](http://www.cheat-sheets.org/sites/sql.su/)
