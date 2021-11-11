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

function someProperties(productObj, div, filter) {
  let children = div;
  for (const key in productObj) {
    if (Object.hasOwnProperty.call(productObj, key)) {
      const element = productObj[key];
      if (
        key === "crop" ||
        key === "details" ||
        key === "img" ||
        key === "ref" ||
        key === "link" ||
        key === "link2"
      )
        continue;
      if (filter) {
        if (
          key.toLowerCase().includes("density") ||
          key.toLowerCase().includes("thousand") ||
          key.toLowerCase().includes("vel") ||
          key.toLowerCase().includes("vol") ||
          key.toLowerCase().includes("diam") ||
          key.toLowerCase().includes("mas") ||
          key.toLowerCase().includes("angle") ||
          key.toLowerCase().includes("area") ||
          key.toLowerCase().includes("moisture") ||
          key.toLowerCase().includes("kernel") ||
          key.toLowerCase().includes("fric")
        )
          continue;
      }
      const round = element.length < 6 ? "round" : "";
      children =
        children +
        `<div class='properties' > <span class='property'>${key}:</span> <span class='value ${round}'>${element}</span> </div>`;
    }
  }
  return children;
}

function showProducts(obj, filterItems) {
  obj
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

      item.innerHTML = someProperties(product, children, true);
      featured.appendChild(item);
      item.onclick = () => handleProductClick(product);
    });
}

const findMatches = (searchString, products) => {
  return products.filter((product) => {
    const regex = new RegExp(searchString, "gi");
    return product.crop.match(regex);
  });
};

const activateNav = (nav, listOfNavs) => {
  listOfNavs.forEach((element) => {
    element.classList.remove("active");
  });
  nav.classList.add("active");
};
