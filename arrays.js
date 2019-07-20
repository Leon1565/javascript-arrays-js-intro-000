var chocolateBars = ["snickers", "hundred grand", 
"kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return array[element];
}
addElementToBeginningOfArray([1], 'foo');
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}
destructivelyAddElementToBeginningOfArray([1], 'foo');
function addElementToEndOfArray(array, element){
  return array[element];
}
addElementToEndOfArray([1], 'foo');
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}
destructivelyAddElementToEndOfArray([1], 'foo');
function accessElementInArray(array, index){
  return array[index];
}
accessElementInArray([1, 2, 3], 2);
function destructivelyRemoveElementFromBeginningOfArray(array){
  return 
}


  describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
    it('returns the array with the first element removed', () => {
      expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
  })
