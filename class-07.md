## Domain Modeling

It is the process of creating conceptual model in code for a specific problem... it describes the attributes and behaviors that govern the problem domain.

A domain model that is written accurately can verify and validate a specific issue across various stakeholders.

Take this code for example

```javascript
let epicFailVideo = function (epicRating, hasAnimals){
    this.epicRating = epicRating;
    this.hasAnimals = hasAnimals;
}

let parkourFail = new epicFailVideo(7, false);
let corgiFail = new epicFailVideo(4, true);
```

This will result in creating two new `objects`, `parkourFail` and `corgiFail` which were instantiated with the keyword `new`.
`this` is called a constructor function, it initializes properties inside the `object`.

This way of coding is called **object-oriented model**.

---

---

## HTML Tables

The table structure goes like this 

```html
<table> <!-- table container -->
    <tr> <!-- table row -->
        <td>15</td> <!-- table data -->
        <td>16</td>
        <td>25</td>
    </tr>
    <tr>
        <td>33</td>
        <td>24</td>
        <td>22</td>
    </tr>
</table>
```

To make headings
```html
<table>
    <tr>
        <th></th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
    <tr>
        <th scope="row">Tickets sold:</th>
        <td>120</td>
        <td>200</td>
    </tr>
    <tr>
        <th scope="row">Total sales</th>
        <td>$600</td>
        <td>$750</td>
    </tr>
</table>
```
this would look like this

|             | Saturday   |   Sunday |
| ---         | ---        |  ---     |
|Tickets sold | 120        | 135      |
|Total sales  | $600       | $750     |

There are many other things that can be applied to tables, including headers, footers, width, spacing, border and background.

Tables are written row by row, that is a good note to keep in mind.

---

---

## JavaScript Functions, Methods and Objects

Creating objects with the constructor notation

```javascript
var hotel = newObject();
hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};
```

Creating many objects
```javascript
function hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}
```

Now this function can be used to create many objects for many hotels, do not forget the keyword `new`.
```javascript
var quayhotel = new hotel('Puay', 40, 25);
var parkHotel = new hotel('Park', 120, 77);
```

When a function is created at the global scope, not inside an object or another function, if `this` is used then it refers to the windows object. Meaning that `this` is a keyword to reference the object that the function is created inside.

When a function is created inside an object it becomes a method. In a method, `this` refers to the containing object.

We can add arrays inside an object, or better yet make objects inside arrays.

Global methods start with a capital letter.

JavaScript has several built-in objects such as, `String`, `Number`, `Math` and `Date` that help with writing script.