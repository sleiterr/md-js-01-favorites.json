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
    const searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm);

    const result = products.filter((product) =>
      product.title.includes(searchTerm)
    );
    console.log(result);

    renderResult(result);
  };

  const input = document.querySelector("#search-input");
  input.addEventListener("input", searchInput);
};
