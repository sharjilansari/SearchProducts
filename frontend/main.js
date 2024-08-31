var products;

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Loading Products!');
    await fetchProducts();
});

const clearProductContainer = () => {
    const container = document.getElementById('product-container');
    if (container) {
        container.innerHTML = ''; 
    }
};

const displayData = (data) => {
    const container = document.getElementById('product-container');

    if (!container) return;

    // Clear existing content before adding new data
    clearProductContainer();

    data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'bg-white rounded-lg shadow-md overflow-hidden text-center transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer';

        const productImage = document.createElement('img');
        productImage.src = product.image_url || 'default-image.jpg';
        productImage.alt = product.product_name;
        productImage.className = 'w-full h-48 object-cover';

        const productName = document.createElement('h2');
        productName.textContent = product.product_name;
        productName.className = 'text-xl my-4';

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;
        productPrice.className = 'text-lg text-gray-800';

        const productRating = document.createElement('p');
        productRating.textContent = `Rating: ${product.rating}`;
        productRating.className = 'text-sm text-gray-500 mb-4';

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productRating);

        container.appendChild(productDiv);
    });
};

  
const fetchProducts = async (productName) => {
    let { data } = await axios.get("http://localhost:3000/product", {
        params: { productName }
    });
    console.log(data)
    displayData(data.data)
}
const searchProductHandler = (e) => {
    if (e.target.value.length > 3) {
        fetchProducts(e.target.value)
    }
}