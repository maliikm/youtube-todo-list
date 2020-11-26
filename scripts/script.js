const input = document.getElementById("input");
const list = document.getElementById("list");
const myDate = document.querySelector("#date");
let d = new Date();

myDate.innerHTML = d.toLocaleDateString();

input.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    let li = document.createElement('li');
    let item = input.value;
    li.className = 'item';
    li.innerHTML = 
      `
      <i class="far fa-circle complete co"></i>
      <i class="far fa-check-circle incomplete co"></i>
      <p class="text"> ${item} </p>
      <i class="fas fa-trash delete de"></i>
      `;

    input.value = '';
    list.append(li);
    
  }
});

list.addEventListener('click', e => {
  if(e.target.className === 'fas fa-trash delete de'){
    e.target.parentElement.remove();
  } else if(e.target.className === 'far fa-circle complete co'){
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'block';
    e.target.parentElement.childNodes[5].classList = "text lineThrough";
  } else if(e.target.className === 'far fa-check-circle incomplete co'){
    e.target.style.display = 'none';
    e.target.previousElementSibling.style.display = 'block';
    e.target.parentElement.childNodes[5].classList = "text";
  }

});