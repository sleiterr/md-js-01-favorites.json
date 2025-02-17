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
      <button><a href="page.html?id=${product.id}">Se produkt</a></button>
      <button class="favBtn" id="${product.id}">Føj til favoritter</button> 
     </div>
    </div>
    `;

export const productPageTmpl = (product) =>
  `
    <h2>${product.title}</h2>
    <p><i>${product.price} kr</i></p>
    <img src="${product.image}${product.id}">
    <p>${product.description}</p>
    <button><a href="index.html">Tilbage</a></button> 

<br>
`;
