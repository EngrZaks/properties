const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const menuItems = document.querySelector("ul");
const featured = document.querySelector(".featured-items");

const show = (item, showClass, opacClass) => {
  item.classList.add(showClass);
  setTimeout(() => {
    item.classList.add(opacClass);
  }, 10);
};
const hide = (item, showClass, opacClass) => {
  item.classList.remove(opacClass);
  setTimeout(() => {
    item.classList.remove(showClass);
  }, 500);
};

const toggleMenu = () => {
  menuItems.classList.contains("show")
    ? hide(menuItems, "show", "opac")
    : show(menuItems, "show", "opac");
};

menu.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// import { products } from "./properties";
products.map((product) => {
  const item = document.createElement("div");
  item.classList.add("item");
  let children = `<h2>${product.crop} </h2> <img src='${product.img}' alt='{product.crop'/>`;
  for (const key in product) {
    if (Object.hasOwnProperty.call(product, key)) {
      const element = product[key];
      if (key === "crop" || key === "details" || key === "img") continue;
      children =
        children +
        `<div class='properties'> <span class='property'>${key}:</span> <span class='value'>${element}</span> </div>`;
    }
  }
  item.innerHTML = children;
  featured.appendChild(item);
});

// const image = document.querySelector("img");
// image.src = "";
// console.log(products.length);
