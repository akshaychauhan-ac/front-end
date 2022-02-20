// Pipe & Compose

const pipe = (...functions) => (value) => {
  return functions.reduce((currentValue, currentFunction) => currentFunction(currentValue), value);
};

const compose = (...functions) => (value) => {
  return functions.reduceRight((currentValue, currentFunction) => currentFunction(currentValue), value);
};