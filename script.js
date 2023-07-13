const productContainer = document.getElementById('productContainer');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      const image = document.createElement('img');
      image.src = product.image;
      productDiv.appendChild(image);

      const title = document.createElement('div');
      title.classList.add('title');
      title.textContent = product.title;
      productDiv.appendChild(title);

      const price = document.createElement('div');
      price.classList.add('price');
      price.textContent = `$${product.price}`;
      productDiv.appendChild(price);

      productContainer.appendChild(productDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    productContainer.innerHTML = '<p>An error occurred while fetching product data.</p>';
  });
