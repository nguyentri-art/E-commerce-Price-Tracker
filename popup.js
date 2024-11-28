
document.getElementById('fetchPriceBtn').addEventListener('click', async () => {
    const keyword = document.getElementById('keyword').value.trim();
    console.log(keyword,"here is keyword");
    const loadingMessage = document.createElement('div');
    loadingMessage.innerText = 'Loading...Please wait a sec... ^^ ';
    document.body.appendChild(loadingMessage); // Show loading message

    if (keyword) {
        const priceAmazon = await fetchPriceAmazon(keyword);
        const priceShopee = await fetchPriceShopee(keyword);
        const priceBestBuy = await fetchPriceBestBuy(keyword);
        const priceAliExpress = await fetchPriceAliExpress(keyword);
        document.getElementById('resultAmazon').innerText = `Price at the Amazon: "${keyword}" is ${priceAmazon}`;
        document.getElementById('resultShopee').innerText = `Price at the Shopee: "${keyword}" is $${priceShopee}`; 
        document.getElementById('resultBestBuy').innerText = `Price at the Best Buy: "${keyword}" is $${priceBestBuy}`; 
        document.getElementById('resultAliExpress').innerText = `Price at the AliExpress: "${keyword}" is $${priceAliExpress}`; 

    } else {
        alert('Please enter a keyword.');
    }
});

async function fetchPriceAmazon(keyword) {
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
        return 'Sorry we have limit call by this :( ! support us for get away from this poor <3 ^^ ';
    }
}

async function fetchPriceShopee(keyword) {
    const url = `https://shopee14.p.rapidapi.com/shopee/search-shopee-products/?token=DgZCZzpDuh&keyword=${keyword}}&country=singapore`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2fe533a9e9mshfb3fcc41ad35194p1d1144jsnd13b467033f0',
            'x-rapidapi-host': 'shopee14.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.results[0].price);
        const resultUSD = (result.results[0].price / 1000) / 23000;
        return resultUSD.toFixed(2);
    } catch (error) {
        console.error(error);
        return 'Sorry we have limit call by this :( ! support us at "https://alittledream.onrender.com/" for get away from this poor <3 ^^ ';
    }
}

async function fetchPriceBestBuy(keyword){
    const url = `https://bestbuy-product-data-api.p.rapidapi.com/bestbuy/?page=1&keyword=${keyword}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2fe533a9e9mshfb3fcc41ad35194p1d1144jsnd13b467033f0',
            'x-rapidapi-host': 'bestbuy-product-data-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result,"result =========");
        return result[0].price;
    } catch (error) {
        console.error(error);
        return 'Sorry we have limit call by this :( ! support us at "https://alittledream.onrender.com/" for get away from this poor <3 ^^ ';
    }
}

async function fetchPriceAliExpress(keyword){
    const url = `https://aliexpress-datahub.p.rapidapi.com/item_search?q=${keyword}&page=1&sort=default`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2fe533a9e9mshfb3fcc41ad35194p1d1144jsnd13b467033f0',
            'x-rapidapi-host': 'aliexpress-datahub.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result," here result AliExpress");
        return result.result.resultList[0].item.sales;
    } catch (error) {
        console.error(error);
        return 'Sorry we have limit call by this :( ! support us at "https://alittledream.onrender.com/" for get away from this poor <3 ^^ ';
    }
}