var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var element = "foo";

function addElementToBeginningOfArray(chocolateBars, element){
  return [element, ...chocolateBars];
}
