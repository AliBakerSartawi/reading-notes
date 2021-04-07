## Database Normalization

**Database normalization** is a process used to organize a database into tables and columns.

The stages of organization are called *normal forms*; there are three normal forms most databases adhere to using.

There are **three** main reasons to normalize a database: 
- The first is to minimize duplicate data, 
- the second is to minimize or avoid data modification issues, 
- and the third is to simplify queries.

| EmployeeId | SalesPerson | SalesOffice | OfficeNumber | Customer1 | Customer2 | Customer3 |
| ---        | ---         | ---         | ---          | ---       | ---       | ---       |
| 1003       | Mary Smith  | Chicago     | 312-555-1212 | Ford      | GM        |           |
| 1004       | John Hunt   | New York    | 212-555-1212 | Dell      | HP        | Apple     |
| 1005       | Martin Hap  | Chicago     | 312-555-1212 | Boeing    | HP        | Apple     |

In the example above, the table serves many purposes, not just one... which causes data duplication. For each SalesPerson we listed the SalesOffice, and for each SalesOffice we listen the OfficeNumber... Duplicated information presents two problems:
- It increases storage and decreases performance.
- It becomes more difficult to maintain data changes... such as changing the number of an office, or changing the office of a SalesPerson.

There are **three** modification anomalies that can occur:
- **Insert Anomaly**, for example, we cannot insert a SalesOffice unless we know a SalesPerson, because we need a primary key which, in this case, is the EmployeeId.
- **Update Anomaly**, to change the OfficeNumber of one office requires multiple changes in all the instances.
- **Deletion Anomaly**, deleting one row can cause more than one set of facts to be removed... if one employee retires, a whole SalesOffice might be lost from the database, such as John Hunt.

There are **three** common forms of normalization: 1st, 2nd, and 3rd normal form:
- **First Normal Form** – The information is stored in a relational table and each column contains atomic values, and there are not repeating groups of columns.
- **Second Normal Form** – The table is in first normal form and all the columns depend on the table’s primary key.
- **Third Normal Form** – The table is in second normal form and all of its columns are not transitively dependent on the primary key.

---

### Links

[Database Normalization](https://www.codeproject.com/Articles/832221/Get-Ready-to-Learn-SQL-Database-Normalization-Expl)

