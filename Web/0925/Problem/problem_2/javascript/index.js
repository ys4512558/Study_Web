const PRICE = 320;
window.onload = function () {
    var many = document.getElementById("many");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");

    many.addEventListener("keyup", update);

    btn1.addEventListener("click", order);
    btn2.addEventListener("click", cancel);
}

function update() {
    let money = Number(many.value) * PRICE;
    let point = document.getElementById("point");
    let sale = document.getElementById("sale");
    let total = document.getElementById("total");

    if (money >= 10) {
        point.innerHTML = money / 10;
    }
    else {
        point.innerHTML = 0;
    }

    if (money >= 30000) {
        sale.innerHTML = money * 0.03;
    }
    else {
        sale.innerHTML = 0;
    }

    total.innerHTML = "총 금액 : " + (money - Number(sale.innerHTML));

}

function order() {
    let money = Number(many.value) * PRICE;

    alert("총 수량 : " + many.value + "\n"
        + "총 금액 : " + money
        + "\n" + "주문완료");
}

function cancel() {
    let point = document.getElementById("point");
    let sale = document.getElementById("sale");
    let total = document.getElementById("total");
    many.value = "";
    point.innerHTML = "0";
    total.innerHTML = "총 금액 : 0";
    sale.innerHTML = "0";

}