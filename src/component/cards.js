
export default  async function cards(sectionOffers,url) {
    console.log(sectionOffers)
try {
    const request = await fetch(url);
    const res = await request.json();  
    rendeData(res);

    function rendeData(){
        const fragmento = document.createDocumentFragment();
        const sectionCards = document.querySelector(sectionOffers);
        
        res.forEach(element => {
          const divbox = document.createElement('div');
          divbox.innerHTML = `
            <div class="cardsoffers">
              <div class="fila img"><img src="${element.img}" alt=""></div>
              <div class="fila nombre"><h3>${element.nombre}</h3></div>
              <div class="fila precio"><h3>${element.precio}</h3></div>
              <button data-id="${element.id}" class="button_fila button_comprar">Ver más</button>
            </div>
          `;
          fragmento.appendChild(divbox);
        });
      
        sectionCards.appendChild(fragmento);
    }
} catch (error) {
    console.log(error);
}
 
}

export function carruself(left,rigth,cardsoffers){
    const size=-112;
    const translatex='translateX(';
    const part='%)'
    const juntar=translatex+size+part;
   
    

    document.addEventListener("click",(e)=>{
        if(e.target.matches(left)|| e.target.matches(`${left} *`)){
            console.log("izquierda")
            console.log(juntar)
            cardsoffers.style.transform = `${juntar}`;
        
        }
        if(e.target.matches(rigth)|| e.target.matches(`${rigth} *`)){
            console.log("derecha")
        }
    })

}


