import model from "./model.js"
import view from "./view.js"

let btn = view.render(model.addNr(), document.body);

btn.addEventListener('click', function() {
  view.update(model.addNr());
});
