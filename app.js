// Calculation total
function updateProductCount(product, price, isIncresing) {
    const productInput = document.getElementById(product + '-count');
    let productCount = productInput.value;
    if (isIncresing == true) {
        productCount = parseInt(productCount) + 1;
    } else if (productCount > 0) {
        productCount = parseInt(productCount) - 1;
    }
    productInput.value = productCount

    // Update Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productCount * price;
};


// phone increse & Decrtese
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductCount('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductCount('phone', 1219, false);
});

// case increse & Decrtese
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductCount('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductCount('case', 59, false)
});