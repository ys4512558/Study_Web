function change(num) {
    document.getElementById("result").src = "img/img (" + num + ").png";
    // document.getElementById("p1").innerHTML = "상품 : 상품" + num;
    document.getElementById("p1").innerHTML = "<h1>안녕하세요</h1>";

    document.getElementById("p2").innerHTML = "가격 : " + num * 20;
    if (num == 1) {
        document.getElementById("p3").innerHTML = "색상 : Red";
    }
    else if (num == 2) {
        document.getElementById("p3").innerHTML = "색상 : Blue";
    }
    else {
        document.getElementById("p3").innerHTML = "색상 : Green";
    }
    document.getElementById("p4").innerHTML = "규격 : 규격" + num;
    document.getElementById("p5").innerHTML = "수량 : " + (num + 100);
}