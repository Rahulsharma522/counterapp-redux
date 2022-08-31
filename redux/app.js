function counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return 0;      
      default:
        return state;
    }
  }
  
  var store = Redux.createStore(counter);
  
  function render() {
    document.querySelector('#counter').innerText = store.getState();
  }
  
  store.subscribe(render);
  render();
  
  document.querySelector('#increment').addEventListener('click', function(){
    store.dispatch({ type:'INCREMENT' })
  });
  
  document.querySelector('#decrement').addEventListener('click', function(){
    store.dispatch({ type:'DECREMENT' })
  });
  
  document.querySelector('#reset').addEventListener('click', function(){
    store.dispatch({ type:'RESET' })
  });
  
  