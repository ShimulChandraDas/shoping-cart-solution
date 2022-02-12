document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-count');
    const caseCount = caseInput.value;
    caseInput.value = parseInt(caseCount) + 1;
    console.log(caseCount);
})