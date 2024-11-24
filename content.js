const keyword = prompt("Enter the product keyword to compare prices:");
const priceElements = [];

// Function to fetch price from a specific site
function fetchPriceFromSite(selector) {
    const priceElement = document.querySelector(selector);
    if (priceElement) {
        const price = priceElement.innerText;
        priceElements.push(price); // Store the price
        console.log(`Price found: ${price}`);
    }
}


// Example selectors for different sites (you may need to adjust these)
fetchPriceFromSite('.price'); // Current site
// Add similar calls for Amazon, Shopee, Lazada with their respective selectors
// fetchPriceFromSite('.amazon-price-selector');
// fetchPriceFromSite('.shopee-price-selector');
// fetchPriceFromSite('.lazada-price-selector');

// After fetching, you can compare and display the prices
console.log(`Prices from different sites: ${priceElements.join(', ')}`);