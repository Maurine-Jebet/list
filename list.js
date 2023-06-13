function addItem() {
  var newItem = document.getElementById("newItem").value;
  var li = document.createElement("li");
  li.innerHTML = newItem;
  document.getElementById("myList").appendChild(li);
}

function removeItem() {
  var li = document.getElementById("myList").lastElementChild;
  li.remove();
}
// function deleteItem() {
//   var li = document.getElementById("myList").lastElementChild;
//   li.delete();
 
  
  
// }


const todoItem = document.getElementById('liss');
const todoText = todoItem.textContent;
console.log(todoText);
fetch('https://dummyjson.com/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  fetch('https://dummyjson.com/todos/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    todo: 'Go to the grocery market',
    completed: false,
    userId: 30,
  })
})