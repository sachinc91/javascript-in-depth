# javascript-in-depth
javascript in depth concepts

This is the repository for the LinkedIn 

[Note : Some examples Uses browser console for output ]
Topics : 

* var : Define global scope [Scope of var](ScopeOfVariable/vars/vars.html)
* let : Define block level scope [Scope of let](ScopeOfVariable/let/let.html)
* const : protect data from accidentally over-written. Throw TypeError: Assignment to constant variable.
* Datatype : Javascript is weakly typed language [Datatypes](ScopeOfVariable/data-types/data-types.js) 
* function :  support three types
  * function declaration
  * function expression
  * Immediately invoked function expression IIFE

* callbacks : 
* array
  * loop : 
    * Difference between for in and for of  
     ```let arr = ['el1', 'el2', 'el3'];
      arr.addedProp = 'arrProp';
    
      // elKey are the property keys
      for (let elKey in arr) {
      console.log(elKey);
      }
    
      // elValue are the property values
      for (let elValue of arr) {
      console.log(elValue)
      }```
* Difference between arrays and map : 
  * map returns a new array and orEach has no return value.
  * forEach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database) and does not return anything.
  * map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase). It does not mutate the array on which it is called (although if passed a callback function, it may do so).
  