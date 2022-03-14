/*     <div id="content">
      <header>
        <div>Home</div>
        <div>Menu</div>
        <div>Contact</div>
      </header>

      <main>
        <h1>Fast Restaurant</h1>
        <div><em>fast food, high quality</em></div>
      </main>
    </div> */

const home = document.createElement("main");

const title = document.createElement("h1");
title.textContent = "Fast Restaurant";

const description = document.createElement("em");
description.textContent = "fast food, high quality";

home.appendChild(title);
home.appendChild(description);

export default home;
