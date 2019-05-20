const addTodo = (text, capturing) => {
  alert(`Capturing: ${capturing} - ${text}`);
};

((capturing) => {
  document.getElementById('btn').addEventListener('click', function(event) {
    // You could stop the propagation of the event up the chain
    // event.stopPropagation();

    // This refers to the object on which the event is attached and fired from
    // !!!! It won't work with Arrow function as it doesn't have its own this
    addTodo(this.id, capturing);
  }, capturing);

  document.getElementById('inner').addEventListener('click', function(event) {
    addTodo(this.id, capturing);
  }, capturing);

  document.getElementById('outer').addEventListener('click', function(event) {
    addTodo(this.id, capturing);
  }, capturing);
  
})(true); // change the param to true/false to enable capturing/bubbling
