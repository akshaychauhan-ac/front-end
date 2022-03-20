// Pipe & Compose

function addby2(val) {
  return (val += 2);
}

function mulBy2(val) {
  return (val *= 2);
}

function subBy2(val) {
  return (val -= 2);
}

const pipe = (...functions) => (value) => {
  return functions.reduce((currentValue, currentFunction) => currentFunction(currentValue), value);
};
console.log(pipe(addby2, mulBy2, subBy2)(4));

const compose = (...functions) => (value) => {
  return functions.reduceRight((currentValue, currentFunction) => currentFunction(currentValue), value);
};
console.log(compose(addby2, mulBy2, subBy2)(4));

// Used to accept multiple functions and compute on same input
