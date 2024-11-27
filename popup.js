document.getElementById('fetchPriceBtn').addEventListener('click', async () => {
    const keyword = document.getElementById('keyword').value.trim();
    console.log(keyword,"here is keyword");
    if (keyword) {
        const price = await fetchPrice(keyword);
        document.getElementById('result').innerText = `Price of the first item: ${price}`;
    } else {
        alert('Please enter a keyword.');
    }
});

async function fetchPrice(keyword) {
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${keyword}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2fe533a9e9mshfb3fcc41ad35194p1d1144jsnd13b467033f0',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data.products[0].product_price);
        return result.data.products[0].product_price; // Assuming the price is in the first item's data
        // Check if items exist in the result
    } catch (error) {
        console.error(error);
        return 'Error fetching price';
    }
}