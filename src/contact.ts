const contact = document.createElement("main");
contact.id = "contact";

const title = document.createElement("h1");
title.textContent = "Fast Restaurant";

const phone = document.createElement("div");
phone.textContent = "(+0)111 0101 000";

const address = document.createElement("div");
address.textContent = "Node Street, Scribaya, North Java, 101";

const country = document.createElement("div");
country.textContent = "United States of JavaScript";

const map = document.createElement("section");

contact.appendChild(title);
contact.appendChild(phone);
contact.appendChild(address);
contact.appendChild(country);
contact.appendChild(map);

export default contact;
