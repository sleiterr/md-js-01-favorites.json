import { fetchProducts } from "./fetch_data.js";
import { FavListTmpl } from "./templates.js";

const products = await fetchProducts();

export const favorites = () => {
  const favoriteContainer = document.querySelector(".favorite-container");
  let favoritesArray = JSON.parse(localStorage.getItem("favList")) || [];
  /* localStorage.setItem('favList', 'test') */

  const favoriteList = () => {
    if (favoriteContainer) {
      if (favoritesArray.length != 0) {
        favoriteContainer.innerHTML = "";
        favoritesArray.forEach((fav) => {
          favoriteContainer.insertAdjacentHTML("beforeend", FavListTmpl(fav));
        });
      } else {
        favoriteContainer.insertAdjacentHTML(
          "beforeend",
          "Der er ikke tilføjet nogle favorite"
        );
      }
    }
  };
  favoriteList();

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
    favoriteList();
  };

  const favBtn = document.querySelectorAll(".favBtn");
  favBtn.forEach((btn) => {
    btn.addEventListener("click", addToFav);
  });

  // const favoriteList = () => {
  //   favoriteContainer.innerHTML = "";
  //   favoritesArray.forEach((fav) => {
  //     favoriteContainer.insertAdjacentHTML("afterend", FavListTmpl(fav));
  //   });

  // favoriteList();
};
