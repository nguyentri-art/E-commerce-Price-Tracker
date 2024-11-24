document.addEventListener('DOMContentLoaded', () => {
    const compareButton = document.getElementById('compare-button');
    const keywordInput = document.getElementById('keyword-input');

    compareButton.addEventListener('click', () => {
        const keyword = keywordInput.value;
        if (keyword) {
            // Logic to initiate price comparison with the entered keyword
            chrome.storage.local.set({ keyword: keyword }, () => {
                console.log(`Keyword saved: ${keyword}`);
                // You can also send a message to content.js to start fetching prices
            });
        } else {
            alert('Please enter a keyword to compare prices.');
        }
    });

    // Logic to display saved prices or track new prices
    chrome.storage.local.get(['prices'], (result) => {
        const priceInfoDiv = document.getElementById('price-info');
        priceInfoDiv.innerHTML = result.prices ? result.prices.join('<br>') : 'No prices found.';
    });
});