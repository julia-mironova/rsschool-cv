let outPut = document.querySelector(".put");
let typeOfTickets = "Permanent exhibition";

let basic = 1;
let senior = 1;

let permanent_ex_basic = 20;
let permanent_temp_basic = 25;
let permanent_comb_basic = 40;

let permanent_ex_senior = 10;
let permanent_temp_senior = 12.5;
let permanent_comb_senior = 20;

outPut.value =  basic*permanent_ex_basic+senior*permanent_ex_senior;



window.addEventListener("click", function() {
    findTotalPrice();
})

function findTotalPrice() {
    choosenTypeOfTickets();
    basic = +document.querySelector('.basic').value;
    senior = +document.querySelector('.senior').value;
    
if (typeOfTickets == "Permanent exhibition") {
    outPut.value = basic*permanent_ex_basic+senior*permanent_ex_senior;
} else if (typeOfTickets == "Temporary exhibition") {
    outPut.value = basic*permanent_temp_basic+senior*permanent_temp_senior;
} else if (typeOfTickets == "Combined Admission") {
    outPut.value = basic*permanent_comb_basic+senior*permanent_comb_senior;
}
return outPut.value;
}

//type of tickets
let arrInputsCheck = document.querySelectorAll("input[name=radio]");
function choosenTypeOfTickets() {
    if (arrInputsCheck[0].checked == true) {
        typeOfTickets = "Permanent exhibition";
    } else if (arrInputsCheck[1].checked == true) {
        typeOfTickets = "Temporary exhibition";
    } else if (arrInputsCheck[2].checked == true) {
        typeOfTickets = "Combined Admission"; 
    }
    return typeOfTickets;
};
