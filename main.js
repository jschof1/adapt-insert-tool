const dummyObj = [
  {
    _parentId: 1,
  },
  {
    _parentId: 1,
  },
  {
    _parentId: 2,
  },
  {
    _parentId: 2,
  },
];

const updatedThing = (objectKey, textToInsert) =>
  dummyObj.map((el, idx) => ({
    ...el,
    objectKey: `${textToInsert}${Math.ceil(idx / 2)}`,
  }));
  
//check that the object has been mutated correctly
console.log(updatedThing('_parentId', 'blockTitle'));

function exportToJsonFile(jsonData) {
  let dataStr = JSON.stringify(jsonData);
  let dataUri =
    'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

  let exportFileDefaultName = 'data.json';

  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}


// Calling the function below will export the mutated object as a .json
// exportToJsonFile(updatedThing('_parentId', 'blockTitle'));

//when the .json file is downloaded ready for insertion into an Adapt component.js file
