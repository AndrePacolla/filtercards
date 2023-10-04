const filter = document.querySelector(' header input');
const cards = document.querySelectorAll('.cards li');



const filterCards = () =>{

  if(filter !== ''){

    cards.forEach((card) =>{

      let title = card.querySelector('h2'); // pegando a tag

      title = title.textContent.toLocaleLowerCase(); // pegando content da tag e trasnform caixa baixa
      filterValue = filter.value.toLocaleLowerCase() // pegando content do input e transform caixa baixa

      if(title.includes(filterValue)){
        card.style.display = 'block'
      }else{
        card.style.display = 'none'
      }
    })

  }else{
    
    for(let card of cards){
      
      card.style.display = 'block'
    }
  }
}

filter.addEventListener('input', filterCards);
