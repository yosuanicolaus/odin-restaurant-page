const menu = document.createElement("main");

const name = document.createElement("h3");
name.textContent = "Pizza";
const description = document.createElement("em");
description.textContent = "best pizza you will ever eat";

menu.append(name);
menu.append(description);

export default menu;
