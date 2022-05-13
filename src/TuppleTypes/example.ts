type myTuppleType = [ number, string | number | boolean, boolean? ]; // length 1 | 2 | 3
let tupleTypeArray: myTuppleType = [10, 'Macbeth'];

tupleTypeArray[0] = '10';           // Error
tupleTypeArray[1] = null;           // Error
tupleTypeArray[4] = 'someString';   // Error
