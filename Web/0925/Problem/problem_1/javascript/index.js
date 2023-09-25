window.onload = function () {
    //홀짝
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", check1);

    //3의 배수
    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", check2);

    //성인 미성년자
    let btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", check3);

    //성인 미성년자
    let btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", check4);

    //성인 미성년자
    let btn5 = document.getElementById("btn5");
    btn5.addEventListener("click", check5);

}

function check1() {
    let num1 = document.getElementById("num1").value;
    let result1 = document.getElementById("result1");
    if (num1 % 2 == 0)
        result1.innerText = "짝수";
    else
        result1.innerHTML = "홀수";
}
function check2() {
    let num2 = document.getElementById("num2").value;
    let result2 = document.getElementById("result2");
    if (num2 % 3 == 0)
        result2.innerText = "3의 배수";
    else
        result2.innerHTML = "3의 배수 X";
}
function check3() {
    let num3 = document.getElementById("num3").value;
    let result3 = document.getElementById("result3");
    if (num3 >= 20)
        result3.innerText = "성인";
    else
        result3.innerHTML = "미성년자";
}

function check4() {
    let num4 = document.getElementById("num4").value;
    let result4 = document.getElementById("result4");
    if (num4 >= 90)
        result4.innerText = "합격";
    else
        result4.innerHTML = "불합격";
}
function check5() {
    let num5 = document.getElementById("num5").value;
    let result5 = document.getElementById("result5");
    if (num5 >= 95)
        result5.innerText = "A+";
    else if (num5 >= 90)
        result5.innerHTML = "A0";
    else if (num5 >= 85)
        result5.innerHTML = "B+";
    else if (num5 >= 80)
        result5.innerHTML = "B0";
    else if (num5 >= 75)
        result5.innerHTML = "C+";
    else if (num5 >= 70)
        result5.innerHTML = "C0";
    else if (num5 >= 65)
        result5.innerHTML = "D+";
    else if (num5 >= 60)
        result5.innerHTML = "D0";
    else
        result5.innerHTML = "F";

}


