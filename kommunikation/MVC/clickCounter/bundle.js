(function () {
  'use strict';

  var model = {
    count: 0,
    addNr: function () {
      return this.count++;
    }
  };

  var view = {
    render: function(number, body){
      let button = document.createElement('button');
      button.innerHTML = number;
      body.appendChild(button);
      this.button = button;
      return button;
    },
   update: function(number) {
     this.button.textContent = number;
   },
   button: null,
  };

  let btn = view.render(model.addNr(), document.body);

  btn.addEventListener('click', function() {
    view.update(model.addNr());
  });

}());
