import header from "./header";
import home from "./home";
import { menu } from "./menu";

const content = document.getElementById("content");

content.appendChild(header);

content.appendChild(home);

content.appendChild(menu.create());

content.appendChild(menu.create());
