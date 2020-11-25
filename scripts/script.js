const input = document.getElementById("input");
const list = document.getElementById("list");
const myDate = document.querySelector("#date");


document.addEventListener('keyup', e => {
  if (e.key === 'Enter' && input.value !== ''){
    let item = input.value;
    let position= 'beforeend';
    let text = 
    `
    <li class='item'>
      <i class="far fa-circle complete co" job="complete"></i>
      <i class="far fa-check-circle incomplete co" job="complete"></i>
      <p class="text"> ${item} </p>
      <i class="fas fa-trash delete de" job="delete"></i>
    </li>
    `;
    
    list.insertAdjacentHTML(position, text);

    input.value = '';

    let trashIcons = document.querySelectorAll('.delete');
    
    trashIcons.forEach( e => {
      e.addEventListener('click', () =>{
        e.parentElement.remove();
      });
    });

    let circleIcons = document.querySelectorAll('.complete');
    let circleCheckIcons = document.querySelectorAll('.incomplete');

    
   
    circleIcons.forEach( e => {
      console.log();
      e.addEventListener('click', () =>{
        if(e.style.display = 'inline'){
          e.style.display = 'none';
          e.nextElementSibling.style.display = 'inline';
          e.parentElement.childNodes[5].classList = "text lineThrough";
        }
        
      });
    });

    circleCheckIcons.forEach( e => {
      console.log();
      e.addEventListener('click', () =>{
        if(e.style.display = 'inline'){
          e.style.display = 'none';
          e.previousElementSibling.style.display = 'inline';
          e.parentElement.childNodes[5].classList = "text";
        }
      });
    });
  };
});

let d = new Date();

myDate.innerHTML = d.toLocaleDateString();

