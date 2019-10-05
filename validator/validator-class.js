'use strict';

class Validator{
  constructor(schema){
    this.schema = schema;
  }

  isValid (input, rules) {
    return true;
  };
  
  
  isString (input) {
    return typeof input === 'string';
  };
  
  isObject (input) {
    return typeof input === 'object' && !(input instanceof Array);
  };
  
  isArray (input, valueType) {
    return Array.isArray(input) && (valueType ? input.every( val => typeof val === valueType ) : true);
  };
  
  isBoolean (input) {
    return typeof input === 'boolean';
  };
  
  isNumber (input) {
    return typeof input === 'number';
  };
  
  isFunction (input) {
    return typeof input === 'function';
  };
  
  isTruthy (input) {
    return !!input;
  };
  
  isCorrectType (input, field) {
    switch(field.type) {
    case 'string': return this.isString(input);
    case 'number': return this.isNumber(input);
    case 'array': return this.isArray(input, field.valueType);
    case 'object': return this.isObject(input);
    case 'boolean': return this.isBoolean(input);
    default: return false;
    }
  };
  
  isValid (schema,data) {
  
    let valid = true;
  
    for (let fieldName in schema.fields) {
  
      let field = schema.fields[fieldName];
  
      // Am I required and set?
      let required = field.required
        ? this.isTruthy(data[fieldName])
        : true;
  
        // Am I the right type (if we even care)
      let type = field.type
        ? this.isCorrectType(data[fieldName], field)
        : true;
  
        // If anything is false ...
      if (!(required && type)) {
        valid = false;
      }
  
    }
  
    return valid;
  };
  
}

let myValidator = new Validator();


//////////////////////


module.exports = myValidator;

