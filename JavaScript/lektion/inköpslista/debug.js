function onClick(e) {
  let element = e.target;
  let field = document.querySelector("#field");
  console.log(field.value);

  let newItem = document.createElement("li");
  newItem.textContent = field.value;

  let curry = document.querySelector("ul");
  let delButton = document.createElement("button");
  delButton.textContent = "Ta bort";
  newItem.appendChild(delButton);
  curry.appendChild(newItem);
  delButton.addEventListener("click", function(e){
    curry.removeChild(newItem);
  });
}
let addInput = document.querySelector("#add");
addInput.addEventListener("click", onClick);
