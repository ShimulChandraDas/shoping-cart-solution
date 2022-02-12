function updateCaseCount(isIncresing) {
    const caseInput = document.getElementById('case-count');
    let caseCount = caseInput.value;
    if (isIncresing == true) {
        caseCount = parseInt(caseCount) + 1;
    } else if (caseCount > 0) {
        caseCount = parseInt(caseCount) - 1;
    }
    caseInput.value = caseCount

    // Update Case Total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseCount * 59;
};
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseCount(true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseCount(false)
});