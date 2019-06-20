/*VG Uppgift

I script.js ligger det existerande kod som implementer en simpel länkad lista.
Det ligger också en funktion traverse som är tom. Implementera funktionen traverse
så att den går igenom alla värden i listan och applicerar den givna funktionen på varje värde.
Lös övningen med en rekursiv funktion.*/

function Node(value, next) {
  this.value = value;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head);
  if (this.head) newNode.next = this.head;
  this.head = newNode;
};

/* Do not touch anything above this line */



/* Implement your solution here
 * `node` is a node in the list
 * `f` is the function that should be applied on every value
 */
function traverse(node, f) {    //tar två arg. en node lista och en funktion
  f(node.value)  //du vill att funktionen appliseras på varje listitem. Kalla på funk och ge den listan som argument.
  if(node.next){ //i listan finns två keys. Value och next.
    traverse(node.next, f)  //finns keyN next så kalla på funktionen igen med annat argument
  }
}


/* Do not touch anything below this line */
let list = new LinkedList();
list.addToHead(5);
list.addToHead(3);
list.addToHead(2);
list.addToHead(1);

traverse(list.head, function(value) {
  console.log('Value is: ', value);
});
