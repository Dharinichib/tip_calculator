// const slider = document.querySelectorAll("input[type ='range]");
// console.log(slider);
// slider.forEach(function(slider){
//     slider.addEventListener("input",calculateTip)
// });

// const billInput = document.getElementById("bill");
// billInput.addEventListener("change", calculateTip);
// //console.log(bill);

// function calculateTip(){
//     if(bill === ""){
//         alert("Please enter values");
//        }
//     let bill = parseFloat(billInput.value);
//     let tipPercent = document.getElementById("tip").value;
//    // console.log(bill, tipPercent)

//     billInput.value = bill.toFixed(2);

//     let total = parseFloat((bill*(tipPercent/100)).toFixed(2));
//     let total_amount = total + bill;
//        // console.log(totalTip);

      
//    document.getElementById("tip-amount").textContent = `\₹ ${total}`;
//    document.getElementById("total-amount").textContent = `\₹ ${total_amount}`;
//    document.getElementById("tip-percent").textContent = `\₹ ${tipPercent}%`;
// }

const tip = document.getElementById("tip");
const tit = document.querySelector(".ran");

const tipamt = document.querySelector("tip");
const amt = document.querySelector("bill");
tip.addEventListener("input", function(e){
    let inp = document.getElementById("bill").value;
    let tipam = e.target.value;

    if(inp == ""){
        alert("Amount Required");
        tipamt.style.pointerEvents = "none";
    }
    else{
      document.getElementById("tip-amount").textContent = tipcalculate(parseFloat(inp),parseFloat(tipam));
     // document.getElementById("total-amount").textContent = `\₹ ${tipam}`;
      document.getElementById("tip-percent").textContent = `\₹ ${tipam}%`;
    }
})

function tipcalculate(amt,tip){
    let tipc = (amt * tip/100);
    return "₹ "+tipc + amt;
}