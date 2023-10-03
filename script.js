const filter = document.querySelector(' header input');
const cards = document.querySelectorAll('.cards li');



function filterCards(){
  if(filter.value !== ''){
    
    for(let card of cards){
    let title = card.querySelector('h2')
    title = title.textContent.toLowerCase()
    let textFilter = filter.value.toLowerCase();
    
    if(!title.includes(textFilter)){
      card.style.display = 'none'
    }else{
      card.style.display = 'block'
    }
   }
  }else{
    for(let card of cards){
      card.style.display = 'block'
    }
  }
};

filter.addEventListener('input', filterCards);
