import { fetchProducts } from "./fetch_data.js";
import { FavListTmpl } from "./templates.js";

const products = await fetchProducts();

export const favorites = () => {
  const favoriteContainer = document.querySelector(".favorite-container");
  let favoritesArray = JSON.parse(localStorage.getItem("favList")) || [];
  /* localStorage.setItem('favList', 'test') */

  const favoriteList = () => {
    if (favoriteContainer) {
      favoriteContainer.innerHTML = "";

      if (favoritesArray.length != 0) {
        favoriteContainer.innerHTML = "";
        favoritesArray.forEach((fav) => {
          favoriteContainer.insertAdjacentHTML("beforeend", FavListTmpl(fav));
        });
      } else {
        favoriteContainer.insertAdjacentHTML(
          "beforeend",
          "<p class='favorite-msg'>Der er ikke tilføjet nogle favorite</p>"
        );
      }
    }
    deleteItem();
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

  function deleteItem() {
    const bttnDelete = document.querySelectorAll(".delete-favBtn");

    bttnDelete.forEach((bttn) => {
      bttn.addEventListener("click", () => {
        const index = Number(bttn.getAttribute("data-index"));

        favoritesArray.splice(index, 1);
        localStorage.setItem("favList", JSON.stringify(favoritesArray));

        favoriteList();
      });
    });
  }
};
