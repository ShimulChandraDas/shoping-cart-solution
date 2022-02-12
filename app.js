// Calculation total
function updateProductCount(product, price, isIncresing) {
    const productInput = document.getElementById(product + '-count');
    let productCount = productInput.value;
    if (isIncresing == true) {
        productCount = parseInt(productCount) + 1;
    } else if (productCount > 0) {
        productCount = parseInt(productCount) - 1;
    }
    productInput.value = productCount;

    // Update Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productCount * price;

    //calculate total
    calculateTotal();
};
// calculate total price 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
};
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the sub Total 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
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