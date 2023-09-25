let box, str = "", i, sum = 0, even = 0;
window.onload = function () {
    var ok;
    ok = document.getElementById("ok");
    ok.addEventListener("click", result);

    // for (i = 1; i <= 100; i++) {
    //     sum += i;
    // }
    // for (i = 1; i <= 100; i++) {
    //     if (i % 2 == 0)
    //         even += i;
    // }
    // box.innerHTML = sum;
    // box.innerHTML += "<br>" + even;


    // let box, str = "";
    // str = "";
    // box = document.querySelector(".box");
    // for (let i = 1; i <= 5; i++) 
    //     str += ("자동차-" + i + "<br>")
    // box.innerHTML = str;
}

function result() {
    var dan;
    box = document.querySelector(".box");
    box.innerHTML = "";
    dan = Number(document.getElementById("dan").value);
    for (let j = 1; j <= 9; j++) {
        box.innerHTML += dan + " * " + j + " = " + dan * j + "<br>";
    }
    box.innerHTML += "<br>";
}
