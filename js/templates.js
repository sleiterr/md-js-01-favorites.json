// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  `
    <div class='products-card'>
      <img src="${product.image}${product.id}">
     <div class='content-items'>
      <p class='card-title'>${product.title}</p>
      <p class='price-item'><i>${product.price} kr</i></p>
      </div>
      <div class='card-bttn'>
       <button class='product-bttn'><a href="page.html?id=${product.id}" class='card-link'>Se produkt</a></button>
       <button class="favBtn" id="${product.id}">Føj til favoritter</button> 
      </div>
    </div>
  `;
export const productPageTmpl = (product) =>
  `
  <div class="product-view">
   <img src="${product.image}${product.id}">
   <div class='product-info'>
   <div class='view-content'>
   <h4 class='view-title'>${product.title}</h4>
   <p class='view-price'><i>${product.price} kr</i></p>
   <p class='view-desc'>${product.description}</p>
   </div>
   </div>
   </div>
   
   `;
//  <button class='view-btt'><a href="index.html" class='view-link'>Tilbage</a></button>

export const FavListTmpl = (product) =>
  `
    <div class='fav-card'>
      <img src="${product.image}${product.id}">
     <div class='fav-items'>
      <p class='fav-title'>${product.title}</p>
      <p class='price-fav'><i>${product.price} kr</i></p>
     </div>
     <div class='fav-bttn'>
     <button class="delete-favBtn" id="${product.id}"><i class="fa-solid fa-trash-can delete"></i></button> 
      <button class='view-bttn'><a href="page.html?id=${product.id}" class='view-link'>Se produkt</a></button>
     </div>
    </div>
  `;
