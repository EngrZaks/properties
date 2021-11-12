const menu = document.querySelector(".menu"),
  closeBtn = document.querySelector(".close"),
  menuItems = document.querySelector("ul"),
  featured = document.querySelector(".featured-items"),
  showAllBtn = document.querySelector(".showAllButton"),
  fetureHeading = document.querySelector(".featured h1"),
  search = document.forms[0],
  suggestions = document.querySelector(".search-result"),
  productLay = document.querySelector(".product"),
  details = document.querySelector(".details"),
  summary = document.querySelector(".summary"),
  reference = document.querySelector(".reference"),
  mainNavList = document.querySelectorAll("nav ul li a"),
  navList = document.querySelectorAll(".nav ul li"),
  more = document.querySelectorAll(".more"),
  sections = document.querySelectorAll("section");
let activeDetails = details,
  activeNav = navList[0],
  activeNavMain = mainNavList[0];
activeNav.classList.add("active");
show(activeDetails, "show2", "opac");

activeNavMain.classList.add("active");
document.querySelector(".coverage span").innerHTML = products.length;
const toggleMenu = () => {
  menuItems.classList.contains("show")
    ? hide(menuItems, "show", "opac")
    : show(menuItems, "show", "opac");
};

function handleProductClick(product) {
  show(productLay, "show", "opac");
  productLay.style.background = `white url(${product.img}) no-repeat`;
  details.innerHTML = someProperties(product, "", false);
  summary.innerHTML = `<p> ${product.details} </p>`;
  reference.innerHTML = product.ref
    .split(",")
    .map((line) => {
      return `<p>${line},</p>`;
    })
    .join("");
  if (product.link) {
    reference.innerHTML += `<a href='${product.link}' target='blank'>LINK</a>`;
  }
  if (product.link2) {
    reference.innerHTML += `<a href='${product.link2}' target='blank'>2nd LINK</a>`;
  }
  setTimeout(() => {
    productLay.classList.add("animate");
  }, 100);
}

function hideProductLay(e) {
  productLay.classList.remove("animate");
  hide(productLay, "show", "opac");
}
const handleNavigate = (e) => {
  const text = e.target.textContent;
  activeNav = e.target;
  activeDetails =
    text === "Properties" ? details : text === "Summary" ? summary : reference;
  activateNav(activeNav, navList);
  more.forEach((element) => {
    element.classList.remove("show2");
    element.classList.remove("opac");
  });
  show(activeDetails, "show2", "opac");
};

let element;
const handleMainNavigate = (e) => {
  const text = e.target.textContent;
  activeNavMain = e.target;
  activateNav(activeNavMain, mainNavList);
  console.log(text.toLowerCase());
  if (text.toLowerCase() === "home") {
    window.scrollTo(0, 0);
  } else {
    if (text.toLowerCase() === "about") {
      element = sections[0];
      hide(sections[1], "show2", "opac");
      show(element, "show2", "opac");
    } else if (text.toLowerCase() === "contact") {
      element = sections[1];
      hide(sections[0], "show2", "opac");
      show(element, "show2", "opac");
    }
  }
  closeBtn.click();
};

//show products on screen and filter out some in the array
showProducts(products, [
  "cumi",
  "millet",
  "pear",
  "sun",
  "gram",
  "bar",
  "kidney",
  "soybean",
  "groundnut",
  "cocoa",
  "wheat",
]);

function showAllProducts(e) {
  featured.style.opacity = 0;
  fetureHeading.textContent = "All Products";
  showAllBtn.style.display = "none";
  window.scrollTo(0, 0);
  setTimeout(() => {
    featured.innerHTML = "";
    showProducts(products, []);
    featured.style.opacity = 1;
  }, 500);
}

let searchResult;
let selectedResult = [];
const handleSuggestions = (e) => {
  const searchString = e.target.value;
  const items = findMatches(searchString, products);
  let html = items
    .map(function (product) {
      return `<li onclick='handleClick'>${product.crop}</li>`;
    })
    .join("");
  suggestions.innerHTML = html;
  searchResult = items;
  let suggestionLists = document.querySelectorAll(".search-result li");
  suggestionLists.forEach((li) => (li.onclick = handleSuggClick));
};

function handleSuggClick(e) {
  const x = e.target.textContent;
  const clickedProduct = products.filter((product) =>
    product.crop.match(x, "gi")
  );
  featured.style.opacity = 0;
  fetureHeading.textContent = "";
  setTimeout(() => {
    featured.innerHTML = "";
    showProducts(clickedProduct, []);
    featured.style.opacity = 1;
  }, 500);
  suggestions.innerHTML = "";
  search.reset();
}

function removeSuggestions(e) {
  if (!suggestions.contains(e.target)) {
    suggestions.innerHTML = "";
  }
}

const handleSearch = (e) => {
  featured.style.opacity = 0;
  fetureHeading.textContent = "Search Results";
  setTimeout(() => {
    featured.innerHTML = "";
    showProducts(searchResult, []);
    featured.style.opacity = 1;
  }, 500);
  showAllBtn.style.display = "block";
};

search.onsubmit = (e) => {
  e.preventDefault();
  handleSearch();
};

//Event Listeners
menu.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
search.addEventListener("change", handleSuggestions);
window.addEventListener("click", removeSuggestions);
search.addEventListener("keyup", handleSuggestions);
showAllBtn.addEventListener("click", showAllProducts);
navList.forEach((element) => {
  element.addEventListener("click", handleNavigate);
});
mainNavList.forEach((element) => {
  element.addEventListener("click", handleMainNavigate);
});
