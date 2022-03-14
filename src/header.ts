const header = document.createElement("header");

const divHome = document.createElement("div");
divHome.textContent = "Home";

const divMenu = document.createElement("div");
divMenu.textContent = "Menu";

const divContact = document.createElement("div");
divContact.textContent = "Contact";

header.appendChild(divHome);
header.appendChild(divMenu);
header.appendChild(divContact);

export default header;
