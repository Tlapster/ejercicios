const form = document.forms.tipCalc;
const reset = document.getElementById("reset")

form.addEventListener("change", processTip);
reset.addEventListener('click', resetAll);

function processTip() {
    
    const bill = parseFloat(form.bill.value);
    const tip = parseFloat(form.tip.value);
    const personas = parseFloat(form.personas.value);
    
    const tipAmount = calculateTip(bill, tip, personas);
    const totalAmount = calculateTotal(bill, tip, personas);

    printValues(tipAmount, totalAmount);
}

function calculateTip(bill, tip, personas) {
    return (bill * tip) / personas;
};
function calculateTotal(bill, tip, personas) {
    return ((bill * tip) + bill) / personas;
};

function printValues(tip, total) {
    const resultAmount = document.getElementById("result-amount__cantidad");
    const resultTotal = document.getElementById("result-total__cantidad");

    resultAmount.textContent = isNaN(tip) ? "0.00" : tip.toFixed(2); 
    resultTotal.textContent = isNaN(total) ? "0.00" : total.toFixed(2);
};

function resetAll() {
    form.reset();
    printValues();
}
