const inputBox =document.querySelector('#input-box');
const listContainer =document.querySelector('#list-container');
function addTask(){
   if(inputBox.value === ''){
    alert("You Must Write Something...")
   }   
   else{
    let li = document.createElement('li');
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span);
   }
   inputBox.value='';
   saveData();
}
listContainer.addEventListener('click',function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove(); 
    saveData();
  }
})
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showData();

inputBox.addEventListener('input', function() {
  const parentRow = this.closest('.row'); // Get the closest parent .row element
  if (this.checkValidity()) {
      parentRow.classList.add('valid');
      parentRow.classList.remove('invalid');
  } else {
      parentRow.classList.add('invalid');
      parentRow.classList.remove('valid');
  }
});
