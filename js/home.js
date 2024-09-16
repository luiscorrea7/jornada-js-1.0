import { getAllConfs } from "./utils/requestConfs.utils.js"

const printCards = async () => {
  try {
    const confsData = await getAllConfs();
    confsData.map((conf) => {
      const mainDiv = document.getElementById('app');
      const cardC = document.createElement('div');
      cardC.classList='bg-warning col-12 col-md-4'
      cardC.innerHTML = `
        img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${conf.titulo}</h5>
          <p class="card-text">Orador: ${conf.orador}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      `
      mainDiv.appendChild(cardC)
      console.log(conf)
    })
  } catch (error) {
    
  }
}

printCards();