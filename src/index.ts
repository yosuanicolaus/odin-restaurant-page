import header, { tabHome, tabMenu, tabContact } from "./header";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./style.css";

const content = document.getElementById("content");

content.appendChild(header);
content.appendChild(home);
let currentTab = home;

tabHome.onclick = () => changeTab(home);
tabMenu.onclick = () => changeTab(menu);
tabContact.onclick = () => changeTab(contact);

function changeTab(tab: HTMLElement) {
  content.removeChild(currentTab);
  content.appendChild(tab);
  currentTab = tab;
}
