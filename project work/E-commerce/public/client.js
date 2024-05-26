function redirectToCollection() {
    window.location.href = './collection.html';
}

document.addEventListener('DOMContentLoaded', function() {
    
// Retrieve product details from URL parameters
// This line creates a new URLSearchParams object using the query string portion of the current URL (window.location.search).
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('productName');
const productPrice = urlParams.get('productPrice');

// Display product details on the page
document.getElementById('product-name').textContent = productName;
document.getElementById('product-price').textContent = '$' + productPrice;
});

