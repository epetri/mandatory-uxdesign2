

class Counter {
  constructor(value){
    this.value = value;
  }

  increment() {
   return this.value = this.value + 1;
  }

  reset(){
   this.value = 0;
  }

  getCurrentValue(){
    return this.value;
  }
}

let count = new Counter(0);

const addButton = document.querySelector('.add');
const resetButton = document.querySelector('.reset');
const showValue = document.querySelector('.value');

addButton.addEventListener('click', function(event){
  count.increment();
  showValue.textContent = count.getCurrentValue();
});

resetButton.addEventListener('click', function(event){
  count.reset();
  showValue.textContent = count.getCurrentValue();
});
