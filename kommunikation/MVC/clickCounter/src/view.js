export default {
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
}
