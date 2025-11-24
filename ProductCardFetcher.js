// Q6 - E-Commerce Dashboard: Product Card Fetcher
// Fetch products from Fake Store API and log Title, Price, Image.
// Bonus: create DOM product cards (works in browser).
// Provided sample console image path (user-supplied): /mnt/data/96364686-0759-439c-9955-f624190459f0.png

const FAKE_STORE_API = 'https://fakestoreapi.com/products';

async function fetchProducts() {
  try {
    const response = await fetch(FAKE_STORE_API);
    if (!response.ok) throw new Error('Network response was not ok');
    const products = await response.json();

    products.forEach(p => {
      console.log('Product:', p.title);
      console.log('Price: $' + p.price);
      console.log('Image:', p.image);
      console.log('---');
    });

    // Bonus: create product cards in the DOM if running in browser
    if (typeof document !== 'undefined') {
      const container = document.createElement('div');
      container.style.display = 'grid';
      container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(220px, 1fr))';
      container.style.gap = '12px';
      products.forEach(p => {
        const card = document.createElement('div');
        card.style.border = '1px solid #ddd';
        card.style.padding = '8px';
        card.style.borderRadius = '8px';
        const img = document.createElement('img');
        img.src = p.image || '/mnt/data/96364686-0759-439c-9955-f624190459f0.png';
        img.alt = p.title;
        img.style.width = '100%';
        img.style.height = '150px';
        img.style.objectFit = 'contain';
        const title = document.createElement('div');
        title.textContent = p.title;
        const price = document.createElement('div');
        price.textContent = '$' + p.price;
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        container.appendChild(card);
      });
      document.body.appendChild(container);
    }

  } catch (error) {
    console.log('Failed to load products. Please try again.');
    console.log('Error:', error.message);
  }
}

fetchProducts();
