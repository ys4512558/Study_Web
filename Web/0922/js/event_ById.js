var left, right, no, pic;
var num;
window.onload = function () {
    left = document.getElementById("left");
    right = document.getElementById("right");
    no = document.getElementById("no");
    num = Number(no.innerText);
    pic = document.querySelector(".pic");

    left.onclick = function () {
        console.log(num);
        if (num == 1) {
            num = 5;
            no.innerText = num;
        }
        else {
            no.innerText = --num;
        }
        pic.src = "/0921/img/img (" + num + ").png";
    }
    right.onclick = function () {
        if (num == 5) {
            num = 1;
            no.innerText = num;
        }
        else {
            no.innerText = ++num;
        }
        pic.src = "/0921/img/img (" + num + ").png";
    }
    var calc;
    calc = document.querySelector(".calc");
    su = document.querySelector(".su");
    kum = document.getElementById("kum");
    mile = document.querySelector(".mile");
    calc.addEventListener("click", function () {
        price = Number(su.value) * 5000;
        kum.innerHTML = price + "원";
        if (price >= 10000) {
            var m = price / 10;
            mile.innerHTML = m + " Point";
        }
    });
    cancle = document.getElementById("cancle");
    cancle.addEventListener("click", function () {
        su.value = "";
        price = 0;
        kum.innerHTML = "";
        mile.innerHTML = "";
        m = 0;
    })
}