const header = document.createElement("header");

export const tabHome = document.createElement("button");
tabHome.textContent = "Home";

export const tabMenu = document.createElement("button");
tabMenu.textContent = "Menu";

export const tabContact = document.createElement("button");
tabContact.textContent = "Contact";

header.appendChild(tabHome);
header.appendChild(tabMenu);
header.appendChild(tabContact);

export default header;
