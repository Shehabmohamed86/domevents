const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items')

addItemInput.addEventListener('keypress', function(e){
  if (e.key === 'Enter'){
  if (!this.value) return;
  const newItemText = this.value;
  const newItem = document.createElement('li') 
  newItem.innerText = newItemText
  itemsUl.appendChild(newItem)
  this.value = '';
  }
});