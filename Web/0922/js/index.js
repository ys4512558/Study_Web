window.onload =
    function () {
        ok.onclick = function () {
            var kor, eng, mat, sum, avg;
            kor = Number(k.value);
            eng = Number(e.value);
            mat = Number(m.value);

            sum = kor + eng + mat;
            avg = sum / 3;
            sum.innerHTML = "총점 : " + sum;
            a.innerHTML = avg;
        }
        jumun.onclick = function () {
            ok2.style.display = "block";
            var price, ea;
            ea = Number(su.value);
            price = ea * 5000;
            con.innerHTML = "주문 수량 : " + ea + "<br>"
                + "금액 : " + price + "<br>";


        }
        document.getElementById("close_btn").onclick = function () {
            ok2.style.display = "none";
        }
    }
