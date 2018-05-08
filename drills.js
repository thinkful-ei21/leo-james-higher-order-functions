'use strict'

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
        fn();
  }
}

function hello() {
    console.log('hello world');
}

function goodbye() {
    console.log('goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);


function filter(arr,fn) {
    let newArray= [];
    for (let i=0; i<arr.length;i++){
        if(fn(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
const testFunction = function(name) {
    return name[0] === 'R';
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Robert', 'Tony','Ray'];
const filteredNames = filter(myNames, testFunction);

console.log(filteredNames)

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return function(location) {
        warningCounter++;
        console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}.`);
        if (warningCounter === 1) {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today.`);
        }
        else {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today.`);
        }
    };
}

const rocksWarning = hazardWarningCreator('rocks on the road');
const iceWarning = hazardWarningCreator('ice on the road');
const fireWarning = hazardWarningCreator('fire');

console.log(fireWarning('main street'));
console.log(fireWarning('main street'));
console.log(iceWarning('main street'));
