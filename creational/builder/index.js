const PastaBuilder = require("./PastaBuilder");

const carbonara = new PastaBuilder("Carbonara")
  .pastaType("Spaghetti")
  .withSauce("Egg sauce")
  .withCheese("Parmegiano Reggiano");

const bolognesse = new PastaBuilder("Bolognesse")
  .pastaType("Penne")
  .withVegetables(["Onion", "Garlic"])
  .withSauce("Tomatoe Sauce");

console.dir(carbonara);
console.dir(bolognesse);
