var chocolateBars = ["snickers", "hundred grand", 
"kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return array[element[0]];
}
addElementToBeginningOfArray([1], 'foo');
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}
destructivelyAddElementToBeginningOfArray([1], 'foo');
function addElementToEndOfArray(array, element){
  return array[element[1]];
}
addElementToEndOfArray([1], 'foo');
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}
destructivelyAddElementToEndOfArray([1], 'foo');
function accessElementInArray(array, index){
  return array[index]
}


describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })