let dishes: Array<{
  name: string,
  description: string,
  img: string,
  price: number
}> = [{
  name: 'Mozzarella Caprese',
  description: 'Tomatoes, fresh mozzarella, olive oil, balsamic vinaigrette, and fresh basil',
  img: 'img/starter2.jpg',
  price: 12.99
  },{
    name: 'Fried Mozzarella',
    description: 'Deep-fried mozzarella cheese',
    img: 'img/starter3.webp',
    price: 10.99
  },{
    name: 'Chicken parmiana',
    description: 'Roasted red and green peppers, eggplant marinated, and cold calamari',
    img: 'img/starter4.webp',
    price: 12.99
  },{
    name: 'Calamari Salad',
    description: 'Cold Calamari marinated with olive oil, garlic, and lemon juice',
    img: 'img/starter1.jpg',
    price: 12.99
  }
  ]

let loop : HTMLElement = document.getElementById('loop');

for (const val of dishes) {
  
  loop.innerHTML += `
  <div class="col-12 col-md-6 col-xl-3 mb-4">
  <div class="card mb-3 samehight">
    <div class="row g-0">
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">${val.name}</h5>
          <p class="card-text lh-1">${val.description}</p>
          <p class="card-text"><small class="text-muted">${val.price}€</small></p>
        </div>
      </div>
      <div class="col-md-6">
        <img src="${val.img}" class="img-fluid rounded-start" alt="...">
      </div>
    </div>
  </div>
</div>
  `
}



          
  