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

  
