var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var element = "foo";

function addElementToBeginningOfArray(chocolateBars, element){
  return [element, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, element){
  return [...chocolateBars, element];
}
function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element);
  return chocolateBars;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, element){
  chocolateBars.shift(element);
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars.
}

