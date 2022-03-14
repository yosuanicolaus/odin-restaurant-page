const menu = document.createElement("main");
menu.id = "menu";

function purgeWords(words: string) {
  return words.replace(" ", "").toLowerCase();
}

function addFood(foodName: string, foodDescription: string, price: number) {
  const foodCard = document.createElement("div");
  foodCard.className = "food-card";

  const foodImg = document.createElement("section");
  foodImg.id = "f-" + purgeWords(foodName);
  foodImg.style.backgroundSize = "100%";

  const foodText = document.createElement("div");
  const name = document.createElement("h3");
  name.textContent = foodName;
  const description = document.createElement("em");
  description.textContent = foodDescription;
  const foodPrice = document.createElement("div");
  foodPrice.className = "food-price";
  foodPrice.textContent = "$" + price;

  foodText.append(name);
  foodText.append(description);
  foodText.append(foodPrice);

  foodCard.appendChild(foodImg);
  foodCard.appendChild(foodText);

  menu.appendChild(foodCard);
}

addFood("French Fries", "Crispy Golden Crunchy Thin Yellow Crunch", 5);
addFood("Fried Chicken", "Crunchy Golden Brown Fried Spicy Saucy Chicken", 8);
addFood("Burger", "Big Beautiful Bun Burg Meat Salad Meat Cheese Burger", 7);
addFood("Pizza", "Share Large Crust Cheese Meat Chicken Crunch Amazing", 10);
addFood("Egg Potato", "Egg Potato Egg Potato Egg Potato Egg Potato Egg", 4);
addFood("Ice Cream", "Kids Love Ice Cream Creamy Cold Yummy Ice Wow", 4);

export default menu;
