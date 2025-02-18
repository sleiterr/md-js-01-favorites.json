import { fetchProducts } from "./fetch_data.js";

const products = await fetchProducts();

export const favorites = () => {
  const favoriteContainer = document.querySelector(".favorite-container");
  let favoritesArray = JSON.parse(localStorage.getItem("favList")) || [];

  if (favoriteContainer) {
    /* localStorage.setItem('favList', 'test') */

    const addToFav = (e) => {
      const productID = e.target.id;
      const productToAdd = products.find((product) => product.id == productID);

      const exist = favoritesArray.find((product) => product.id == productID);

      if (!exist) {
        favoritesArray.push(productToAdd);

        localStorage.setItem("favList", JSON.stringify(favoritesArray));
        // console.log(favoritesArray);
      } else {
        console.log("producte er allerede føjet til favorite");
      }
    };

    const favBtn = document.querySelectorAll(".favBtn");
    favBtn.forEach((btn) => {
      btn.addEventListener("click", addToFav);
    });
  }
};
