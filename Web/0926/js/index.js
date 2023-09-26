
var btnBox_text, btnBox_text2, pic;
window.onload = function () {
    var ord, res, can, coffee, juice, milk;
    ord = document.querySelector(".ord");
    res = document.querySelector(".res");
    can = document.querySelector(".cancel");
    btnBox_text = document.querySelector(".btnBox_text");

    ord.addEventListener("click", order_print);
    res.addEventListener("click", res_print);
    can.addEventListener("click", cancel_print);
    btnBox_text2 = document.querySelector(".btnBox_text2");


    coffee = document.querySelector(".coffee");
    juice = document.querySelector(".juice");
    milk = document.querySelector(".milk");

    coffee.addEventListener("click", coffee_print);
    juice.addEventListener("click", juice_print);
    milk.addEventListener("click", milk_print);

    pic = document.querySelector(".pic");



    // class person {
    //     name;
    //     age;
    // }
    // arr = new Array(10);
    // for (let i = 0; i < 10; i++) {
    //     p = new person();
    //     p.name = "p" + i;
    //     p.age = i;
    //     arr[i] = p;
    // }

    // for (let idx in arr) {
    //     console.log(idx, arr[idx]);
    //     console.log("\n");
    // }

    // arr.forEach((name, age) => {
    //     console.log("nn");
    //     console.log(arr[age]);
    // });

    // let a = 10;
    // function abc() {
    //     let a = "gd";
    //     console.log(a);
    // }
    // abc();
}



function order_print() {
    change_text("주문완료", 1);
}

function res_print() {
    change_text("예약완료", 1);
}

function cancel_print() {
    change_text("취소완료", 1);
}

function coffee_print() {
    change_text("커피 주문완료", 2);
    change_img("coffee");
}

function juice_print() {
    change_text("주스 주문완료", 2);
    change_img("juice");
}

function milk_print() {
    change_text("우유 주문완료", 2);
    change_img("milk");
}

function change_text(txt, num) {
    if (num == 1)
        btnBox_text.innerHTML = txt;
    else
        btnBox_text2.innerHTML = txt;
}

function change_img(category) {
    if (category == "coffee")
        pic.src = "/0925/Problem/problem_3/img/img3.jpg";
    else if (category == "milk")
        pic.src = "/0925/Problem/problem_3/img/img1.jpg";
    else
        pic.src = "/0925/Problem/problem_3/img/img5.jpg";
}
