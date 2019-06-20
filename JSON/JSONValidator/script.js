/* Skapa en sida med en textarea. Användaren ska kunna skriva in en JSON sträng in i
rutan. Sidan ska sen skriva ut ett meddelande om strängen är giltig JSON eller inte. */

let textarea = document.querySelector('textarea');
let button = document.querySelector('button');
let message = document.querySelector('p');

button.addEventListener('click', onClick);

function onClick() {
  try {
      let parsed = JSON.parse(textarea.value);
      message.textContent = 'valid JSON'
    } catch (e) {
      message.textContent = 'not a valid JSON'
    }
  }
