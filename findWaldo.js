// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
      return i;
    }
  }
};

const actionWhenFound = function() {
  console.log("Found him at index " + findWaldo(i));
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);