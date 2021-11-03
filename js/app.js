const menu = document.querySelector(".menu"),
  closeBtn = document.querySelector(".close"),
  menuItems = document.querySelector("ul"),
  featured = document.querySelector(".featured-items"),
  showAllBtn = document.querySelector(".showAllButton"),
  fetureHeading = document.querySelector(".featured h1");

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
function showAllProducts(filterItems) {
  products
    .filter((product) => {
      let filter = true;
      for (let index = 0; index < filterItems.length; index++) {
        const element = filterItems[index].toLowerCase();
        if (product.crop.toLowerCase().includes(element)) filter = false;
      }
      return filter;
    })
    .map((product) => {
      const item = document.createElement("div");
      item.classList.add("item");
      let children = `<h2>${product.crop} </h2> <img src='${product.img}' alt='${product.crop}'/>`;
      for (const key in product) {
        if (Object.hasOwnProperty.call(product, key)) {
          const element = product[key];
          if (
            key === "crop" ||
            key === "details" ||
            key === "img" ||
            key.toLowerCase().includes("density") ||
            key.toLowerCase().includes("thousand") ||
            key.toLowerCase().includes("vel") ||
            key.toLowerCase().includes("vol") ||
            key.toLowerCase().includes("diam") ||
            key.toLowerCase().includes("kernel") ||
            key.toLowerCase().includes("fric")
          )
            continue;
          children =
            children +
            `<div class='properties'> <span class='property'>${key}:</span> <span class='value'>${element}</span> </div>`;
        }
      }
      item.innerHTML = children;
      featured.appendChild(item);
    });
}
showAllProducts(["cumi", "millet", "pear", "sun"]);
// showAllProducts([]);
showAllBtn.addEventListener("click", () => {
  featured.style.opacity = 0;
  fetureHeading.textContent = "All Products";
  showAllBtn.style.display = "none";
  window.scrollTo(0, 0);
  setTimeout(() => {
    featured.innerHTML = "";
    showAllProducts([]);
    featured.style.opacity = 1;
  }, 500);
});
// const image = document.querySelector("img");
// image.src = "";
// console.log(products.length);
