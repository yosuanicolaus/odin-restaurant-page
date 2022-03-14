const contact = document.createElement("main");

const title = document.createElement("h1");
title.textContent = "Fast Restaurant";

const phone = document.createElement("div");
phone.textContent = "(+0)111 0101 000";

const address = document.createElement("div");
address.textContent =
  "Node Street, Scribaya, East Java, 101, United States of JavaScript";

const map = document.createElement("div");
map.textContent = "placeholder for google map here...";

contact.appendChild(title);
contact.appendChild(phone);
contact.appendChild(address);
contact.appendChild(map);

export default contact;
