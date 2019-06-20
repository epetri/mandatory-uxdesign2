
function shoppingList(){
  this.listArray = [];
  this.addItemToBuy = function(item) {
    this.listArray.push(item);
  }

  this.boughtItem = function(item){
    let index = this.listArray.indexOf(item);
    this.listArray.splice(index, 1);
    console.log(item);
    console.log(this.listArray);
  }

  this.isDone = function(item) {
    if(this.listArray.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

let itemList = new shoppingList();
itemList.addItemToBuy('Päron');
itemList.addItemToBuy('skumtomtar');
itemList.addItemToBuy('kakao')
