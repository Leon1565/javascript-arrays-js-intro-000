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
  chocolateBars[element];
  return chocolateBars;
}