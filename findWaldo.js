//-------- USING FOR LOOP ---------------

// The second argument/parameter is expected to be a (callback) function
/* const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      //console.log(i);
      found(i);   // this passes the index of Waldo to the func actionWhenFound
    }
  }
};

const actionWhenFound = function(index) { // Initializing the index parameter is important so that we can return the value of found(i) into this scope
  console.log("Found him at index " + index);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); */
//-------- USING FOR LOOP -----------


//-------- USING FOR EACH -----------

/* const findWaldo = function(names, found) {
  names.forEach(function(name, index) { // For each element in the 'name' array, the callback function takes
    console.log(index);
    if (name === "Waldo") {
      found(index);
    }
  });
};

const actionWhenFound = function(index) { // Reminder: Initialize the index parameter
  console.log("Found him at index " + index);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); */
//findWaldo(["Alice", "Bob", "Waldo", "Winston","Waldo"], actionWhenFound); // returns Waldo if it is in more than one index


//-------- USING FOR EACH -----------

//-------- USING ANONYMOUS FUNC ----------------
const findWaldo = function(names, found) {
  
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);
    }
  });
};

// From Compass instructions: Often a callback function would not be declared or assigned to a variable, but rather would be inline like this:

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index", index);
});