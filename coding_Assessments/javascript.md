# What do you understand about JavaScript
JavaScript is popular webscripting language and is used for client side and server-side development.

# Difference btw JavaScript and Java
JavaScript is object oriented scripting Language,
- Where as Java is an object-oriented programming language
JavaScript applications are meant to run inside a web browser.
- Where as Java Applications are generally made for use in Operating systems and virtual machines,
JavaScript doesnt need compilation before running the application code.
- Where as java source code needs a compiler before it can be run in real time. 

# Datatypes in JavaScript
1. Boolean
2. Null
3. Undefined 
4. Number
5. String 
6. Object 
7. Symbols

# Features of JavaScript
Light weight, interpreted programming knowledge
cross platform compatibile,
Open-source
Object oriented
Integration with other backend aswell as frontend technologies.
Used especially for the development of network-based applications

# Advantages of Javascript
Enhance interaction - Javscript add interaction to other static web pages and makes them react to users input.
Quick feedback - There is no need for webpage to reload when running javascript
Rich user interface - JS helps in making the UI of web application look and feel much better 
Frameworks - JS helps has countless frameworks and libraries that are extensively used for developing web applications and games of all kinds. 
less server interaction

# how to create an object in javaScript
const student ={
 name:'john',
 age: 17
}

# how to create an array in javaScript?
var a = [];
var b = ['a', 'b','c', 'd', 'e'];

# some of the built in methods available in JavaScript

Date()
concat() ex: str1.concat(str2);
push()
pop()
round()
length()

# what are the scopes of a variable in JavaScript

The scope of a variable basically implies where the variable has been decalred or defined in a JS program
There are two scopes of a variable:
Global Scope - Global variables , having global scope are available everywhere in a JS code 
Local Scope - Local variables are accessible only within a function where they are defined. 


# What is this keyword in JavaScript?
The 'this' keyword in JS refers to the currently calling object
It is commonly used in constructors to assign values to object properties. 

# Conventions in naming a variable
Can't be similar to reserved keywords
Can't begin with a numeric value; they must begin with a letter or underscore value
case-sensitive;

# what is callback in JS?
A callback is a JS function that is passed to another function as an argument or a parameter.


# Difference btw function declaration and function expression

# how to write a Javacript code into an HTML file.
we can write JS code within the script tag in the same HTML file. 
external Js and liink using the script tag

# What is a cookie? 
A cookie is generally a small data that is sent from a website and stored on the users machine by a web browser that was used to the access the website. 
Cookies are used to remember info for later use and also to record the browsing activity on a website. 

# How to create a cookie? 
document.cookie = "key1=value1";

# Difference btw let and var
var - function scope
let - block scope

# What are arrow functions in JS?
Arrow functions are a short and concise way of writing functions in JS. 

# Different ways an HTML element can be accessed in a JS code?
getElementbyId('ID')
getElementbyClass('classname')
getElementbyTagName('tagname')
querySelector()

# Different ways for defining variables in JS
var 
const 
let 

# Imports and Exports in JS
Helps in writing modular code for JS applications
with the help of imports and exports, we can split a JS code into multiple files in a project.

# difference btw document and window in JS
the document comes under the window object and can also a property of the window. 
window in JS is a global object that has the properties pertaining to the current DOM document

# Popular JS frameworks
React , Angular and Node

# difference btw Undefined, Null and undeclared 
Undefined - Undefined means a variable has been declared but a value has not yet been assigned to the variable.
Undeclared - variable that are not declared or that donot exist in a program or app.
Null - an assignment value that contains no value.

# How do you empty an array in JS
arr.length = 0;
using a pop and running a loop for the length of the array
by assigning an array
by using splice array function

# difference btw event capturing and event bubbling
Event capturing - the process starts with capturing of the outermost element and then propogating it to the innermost element.
Event bubbling - the process starts with capturing of the innermost element and then propogating it to the outermost element.

# strict mode in JS
for having better error handling capacity.

# How to write a JS code for adding new elements in a dynamic manner

<script>
 let newP = document.createElement('p');
 let textNode = document.createTextNode('this is a text node');
 newP.appendChild(textNode);
 document.getElementbyId('firstP').appendchild(newP);
</script>

# how to remove duplicates in a array
using filter method

# difference between '==' and '==='
the operator '==' compares the value. Where as, the operator '===' compares both value and type.

# difference between innerHtml and innerText?
innerHtml will process an HTML tag if found in a string. innerText will not process an HTML tag if found in a string. 

# what is event bubbling?
When an event bubbling is fired on an HTML element, the execution starts from that event and goes to its parent element. Then the execution passes to its parent element and so on till the body element.

# what is Nan in JavaScript?
NaN is a short form of Not a Number. When a string or something else is being converted into a number and that cannot be done, then we get to see a NaN.

# How do JS primitive/ object types passed in functions?
Primitive types in JS are passed by value.
Whereas objecttypes are passed by reference.`

# What is escape character in JS?
Escape characters are used when working with special characters like single quotes, apostrophes, and ampersands. Place backslash before the character to make it display.