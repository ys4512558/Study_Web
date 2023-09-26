var formul = "";
var dom_formula;
window.onload = function () {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    var num4 = document.getElementById("num4");
    var num5 = document.getElementById("num5");
    var num6 = document.getElementById("num6");
    var num7 = document.getElementById("num7");
    var num8 = document.getElementById("num8");
    var num9 = document.getElementById("num9");

    var oper_plus = document.getElementById("oper_plus");
    var oper_minus = document.getElementById("oper_minus");
    var oper_mul = document.getElementById("oper_mul");
    var oper_div = document.getElementById("oper_div");
    var oper_mod = document.getElementById("oper_mod");

    num1.addEventListener("click", () => addNum(1));
    num2.addEventListener("click", () => addNum(2));
    num3.addEventListener("click", () => addNum(3));
    num4.addEventListener("click", () => addNum(4));
    num5.addEventListener("click", () => addNum(5));
    num6.addEventListener("click", () => addNum(6));
    num7.addEventListener("click", () => addNum(7));
    num8.addEventListener("click", () => addNum(8));
    num9.addEventListener("click", () => addNum(9));

    oper_plus.addEventListener("click", () => addOper("+"));
    oper_minus.addEventListener("click", () => addOper("-"));
    oper_mul.addEventListener("click", () => addOper("*"));
    oper_div.addEventListener("click", () => addOper("/"));
    oper_mod.addEventListener("click", () => addOper("%"));

    var calcurate = document.getElementById("calcurate");
    calcurate.addEventListener("click", calc);
    dom_formula = document.getElementById("formula");
    dom_formula.innerHTML = "0";

    
}

function addNum(num) {
    var dom_formula = document.getElementById("formula");
    formul += num;
    console.log(formul);
    dom_formula.innerHTML = formul;
}

function addOper(oper) {
    dom_formula = document.getElementById("formula");
    var check = formul[formul.length - 1];
    formul += oper;
    dom_formula.innerHTML = formul;
}


function calc() {
    var res = eval(formul);
    var result = document.getElementById("result");
    result.innerHTML = res;
    dom_formula = document.getElementById("formula");
    dom_formula.innerText = "0";
    formul = "";
}