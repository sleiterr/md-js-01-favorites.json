import { fetchProducts } from "./fetch_data.js";
import { productListTmpl } from "./templates.js";

const products = await fetchProducts();

const productListContainer = document.querySelector(".product-container");

export const search = () => {
  const renderResult = (result) => {
    productListContainer.innerHTML = "";

    result.forEach((element) => {
      productListContainer.insertAdjacentHTML(
        "beforeend",
        productListTmpl(element)
      );
    });
  };

  const searchInput = (e) => {
    const searchTerm = document
      .querySelector("#search-input")
      .value.toLowerCase()
      .trim();
    const category = document.querySelector("#category").value;

    if (category === "Alle") {
      const result = products.filter((product) =>
        product.title.toLowerCase().trim().includes(searchTerm)
      );
      renderResult(result);
    } else {
      const findCategory = products.filter(
        (product) => product.category == category
      );

      if (searchTerm == "") {
        const result = findCategory;
        renderResult(result);
      } else {
        const result = findCategory.filter((product) =>
          product.title.toLowerCase().trim().includes(searchTerm)
        );
        renderResult(result);
      }

    }
    // console.log(result);
  };

  const input = document.querySelector("#search-input");
  input.addEventListener("input", searchInput);

  const select = document.querySelector("#category");
  select.addEventListener('change', searchInput)
};
