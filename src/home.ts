const home = document.createElement("main");
home.id = "home";

const welcome = document.createElement("div");

const title = document.createElement("h1");
title.textContent = "Fast Restaurant";
const description = document.createElement("em");
description.textContent = "fast food, high quality";

welcome.appendChild(title);
welcome.appendChild(description);

const restaurant = document.createElement("section");

home.appendChild(welcome);
home.appendChild(restaurant);

export default home;
