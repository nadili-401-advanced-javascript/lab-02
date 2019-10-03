# LAB - 02

## Classes, Inheritance, Functional Programming

### Author: Nadya Ilinskaya/Seattle-js-401n14

### Links and Resources
* [submission PR](https://github.com/nadili-401-advanced-javascript/lab-02/pull/1)
* [travis](https://travis-ci.com/nadili-401-advanced-javascript/lab-02)

### Modules
#### `validator.js`
##### Exported Values and Methods

###### `isValid = (input, rules) -> boolean`
Returns true/false to indicate if input follows the rule

###### `isObjectHasProperty (input, prop)-> boolean`
Returns true/false to indicate the presence of required object properties at any level

###### `isObjectPropertyCorrect (input, prop, prop_type) -> boolean`
Returns true/false to indicate the proper types of object properties if given propery exists 

###### `isArrayValueHasCorrectType = (input, value_type) -> boolean`
Returns true/false to indicate the types of values contained in an array

###### `isArrayValueHasApprovedType = (input, value_type) -> boolean`
Returns true/false to validate a value of an array against an approved list

### Setup
#### Running the app
* `npm start`
* Endpoint: `/docs`
  * Returns a JSdocs
  
#### Tests
* Unit Tests: 'npm test'
* Lint Tests: 'npm run lint'


#### UML
![ UML for the application and response to events](/assets/lab-02-uml.jpg)