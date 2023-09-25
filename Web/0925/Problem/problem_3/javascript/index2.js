let nextB, prevB, disp, count = 1;
const data = ["팥빙수", "바닐라", "아이스 커피", "네 가지 그림", "쥬스",];
$(document).ready(function () {

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
    let k = 1;
    do {
        alert(k);
        k++;
    } while (k < 5);

    $(".nextB").on("click", function () {
        if (count < 5)
            count++;
        $(".disp").text(count + " / 5");
        $("#pic").attr("src", "img/img" + count + ".jpg");
        $("#text1").text("상품 : " + data[count - 1]);
    });

    $(".prevB").on("click", function () {
        if (count > 1)
            count--;
        $(".disp").text(count + " / 5");
        $("#pic").attr("src", "img/img" + count + ".jpg");
        $("#text1").text("상품 : " + data[count - 1]);
    })
});