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
  navList = document.querySelectorAll(".nav ul li"),
  more = document.querySelectorAll(".more");
let activeDetails = details,
  activeNav = navList[3];
activeNav.classList.add("active");
show(activeDetails, "show2", "opac");

const toggleMenu = () => {
  menuItems.classList.contains("show")
    ? hide(menuItems, "show", "opac")
    : show(menuItems, "show", "opac");
};

function handleProductClick(product) {
  show(productLay, "show", "opac");
  productLay.style.background = `white url(${product.img}) no-repeat`;
  details.innerHTML = someProperties(product, "", false);
  summary.innerHTML = product.details;
  reference.innerHTML = product.ref
    .split(",")
    .map((line) => {
      return `<p>${line},</p>`;
    })
    .join("");
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

showProducts(products, ["cumi", "millet", "pear", "sun"]);

showAllBtn.addEventListener("click", () => {
  featured.style.opacity = 0;
  fetureHeading.textContent = "All Products";
  showAllBtn.style.display = "none";
  window.scrollTo(0, 0);
  setTimeout(() => {
    featured.innerHTML = "";
    showProducts(products, []);
    featured.style.opacity = 1;
  }, 500);
});

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
  suggestionLists.forEach((li) => (li.onclick = handleClick));
};
function handleClick(e) {
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
search.addEventListener("keyup", handleSuggestions);
navList.forEach((element) => {
  element.addEventListener("click", handleNavigate);
});
