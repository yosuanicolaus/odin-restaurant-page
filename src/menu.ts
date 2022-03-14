const menu = (() => {
  const create = () => {
    const main = document.createElement("main");

    const name = document.createElement("h3");
    name.textContent = "Pizza";
    const description = document.createElement("em");
    description.textContent = "best pizza you will ever eat";

    main.appendChild(name);
    main.appendChild(description);

    return main;
  };

  return {
    create,
  };
})();

export { menu };
