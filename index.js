const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.querySelector('.add-form');
const input = document.querySelector('.number')
const container = document.querySelector('.pizza')

let pizzaID = [];

const createCardHTML = (pizza) => {
  const { nombre, precio, ingredientes, imagen } = pizza;

  return `
    <div class='card'>
      <img src=${imagen} class='card-img'>
      <h2>Esta es la ${nombre}</h2>
      <p>Valor: $${precio}</p>
      <p>Sus ingredientes son: ${ingredientes}</p>
    </div>
  `;
};

const renderCard = () => {
  const pizzaEncontrada = pizzas.find((pizza) => pizza.id === pizzaID);
  if (pizzaEncontrada) {
    container.innerHTML = createCardHTML(pizzaEncontrada)
  }
  else {
    container.innerHTML = 'No se encontró pizza'
  }
}

const addCard = (e) => {
  e.preventDefault()
  const number = input.value.trim()
  pizzaID = parseInt(number);
  renderCard(pizzas)
  localStorage.setItem("pizzaID", pizzaID);
}

const savedPizzaID = localStorage.getItem("pizzaID");
if (savedPizzaID) {
  pizzaID = parseInt(savedPizzaID);
  renderCard();
}


const init = () => {
  form.addEventListener('submit', addCard);
  // document.addEventListener ('DOMContentLoaded', divHidden)
}

init ();