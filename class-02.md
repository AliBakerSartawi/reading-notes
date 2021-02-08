## **`HTML`** Text

**`HTML`** has many text tags:
- `<h1>` is the main heading with the largest font size
- `<h6>` is the last and smallest
- `<p>` is for paragraph
- `<b>` for bold
- `<i>` for italic
- `<sup>` for superscript
- `<sub>` for subscript
- `<br />` for a line break
- `<hr />` for a horizontal rule
- and many other tags as well...

In short, the text tags describe the structure of the page and provide semantic information.

---

## Introduction to **`CSS`**

**`CSS`** works by associating rules with **`HTML`** elements... giving the web page a stylised look.

**`CSS`** can be applied inside **`HTML`** elements, or written in a separate file then referenced inside the **`HTML`** file.

When designing a website with multiple pages, keeping the **`CSS`** file separate allows to change the styling for all the pages by simply editing the one **`CSS`** file.

---

## **`JavaScript`** Instruction

Here is a list of instruction for **`JavaScript`** use:
- Before using a `variable`, you have to announce that you want to use it by creating it... for example `var example = 3;`.
- Instructions in the script must be written carefully; the computer will follow them to the T.
- An `array` is a type of variable that can store more than one value.
- **`Javascript`** can also tell the difference between `numbers`, `strings` and `boolean` values.

## Decisions and Loops

In a script, `decisions` are sometimes made to decide which lines of code are going to be run. There has to be an `expression` that will return a `value`, and then a `conditional statement` will decide which route to take.

`comparison operators` are used to manifest Boolean results, which are `true` and `flase` results.

The operators include:
- `==` equal to
- `!=` not equal to
- `===` strictly equal to... they have to match in amount and data type
- `!==` strictly not equal to
- `>` greater than
- `<` less than
- `>=` greater than or equal
- `<=` less than or equal

`Logical operators` allows us to compare the results of more than one comparison operator

The operators are:
- `&&` logical and
- `||` logical or
- `!` logical not... it takes a single Boolean value and inverts it... for example: `(2 < 1)` is `false`, but `!(2 < 1)` is `true`.

Here is an example of `&&` and `||`
- `((2 < 5) && (3 >= 2))` this returns true
- `((2 < 5) || (2 < 1))` this returns true

The `for` loop will run a code for a number of specified times depending on the condition set.
- an basic example would look like this: for `(var i = 0; i < 10; i++)`

The `while` loop will run a code for as many times as the condition is `true`.

The `if` statement will run a code if a condition is met `true`.

The `if` then `else` statement will run a code if a condition is met `true`, or run another code if the condition is not met `false`.
