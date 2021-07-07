var dishes = [{
        name: 'Mozzarella Caprese',
        description: 'Tomatoes, fresh mozzarella, olive oil, balsamic vinaigrette, and fresh basil',
        img: 'img/starter2.jpg',
        price: 12.99
    }, {
        name: 'Fried Mozzarella',
        description: 'Deep-fried mozzarella cheese',
        img: 'img/starter3.webp',
        price: 10.99
    }, {
        name: 'Chicken parmiana',
        description: 'Roasted red and green peppers, eggplant marinated, and cold calamari',
        img: 'img/starter4.webp',
        price: 12.99
    }, {
        name: 'Calamari Salad',
        description: 'Cold Calamari marinated with olive oil, garlic, and lemon juice',
        img: 'img/starter1.jpg',
        price: 12.99
    }
];
var loop = document.getElementById('loop');
for (var _i = 0, dishes_1 = dishes; _i < dishes_1.length; _i++) {
    var val = dishes_1[_i];
    loop.innerHTML += "\n  <div class=\"col-12 col-md-6 col-xl-3 mb-4\">\n  <div class=\"card mb-3 samehight\">\n    <div class=\"row g-0\">\n      <div class=\"col-md-6\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + val.name + "</h5>\n          <p class=\"card-text lh-1\">" + val.description + "</p>\n          <p class=\"card-text\"><small class=\"text-muted\">" + val.price + "\u20AC</small></p>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <img src=\"" + val.img + "\" class=\"img-fluid rounded-start\" alt=\"...\">\n      </div>\n    </div>\n  </div>\n</div>\n  ";
}
