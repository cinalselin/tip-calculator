const resultTip = document.getElementById("tipAmount");
const resultBill = document.getElementById("billAmount");
const resultPp =  document.getElementById("ppAmount");


let tipCalculate = (event) => {
    event.preventDefault();
    const billAmount = +document.querySelector("#bill").value;
    const numPeople = document.querySelector("#person").value;
    const tipValue = document.querySelector("#service").value;

    if(billAmount >=1 && numPeople >=1) {
        let tip = billAmount * tipValue / 100;
        let amount = tip + billAmount;
        let person = amount / numPeople;
        
        resultTip.innerText = tip.toFixed(2) + " €";
        resultBill.innerText = amount.toFixed(2) + " €";
        resultPp.innerText = person.toFixed(2) + " €";
        console.log(`${tip} , ${amount} , ${person}`);
        
    } else {
        window.alert("Please enter bill amount and people. The amount of the bill and people must be over 1");
    }

};

// tipCalculate();
