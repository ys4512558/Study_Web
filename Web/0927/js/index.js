// $(document).ready(function () {
//     $(".menu").on("click", function () {
//         var no = $(this).index();
//         alert($(".menu").eq(no).text());
//     })
// })

const msgA = ["text1", "text2", "text3", "text4", "text5"];
const posterA = ["big0.jpg",
    "big1.jpg",
    "big2.jpg",
    "big3.jpg",
    "big4.jpg"];
const titleA = ["콘크리트 유토피아", "제네시스", "33333333333", "444444444444444444444", "5555555555555"];
let no;
window.onload = function () {
    for (let i = 0; i < posterA.length; i++) {
        $("#imgs li:eq(" + i + ")")
            .css("background", "url(img/" + posterA[i] + ")")
            .css("backgroundSize", "100% 100%");
    }
    $("#imgs li").hide();
    $("#imgs li:eq(0)").show();
    $(".select li:eq(0)").css("background", "red");
    $("#imgs li").text("");
    change_div();

}
var count = 0;
$(function () {
    $("nav div").on("click", function () {
        no = $(this).index();
        $("#title").text(msgA[no]);
    })
    $("#right").on("click", function () {
        if (count < 4) {
            count++;
        }
        else {
            count = 0;
        }
        change_div();
    })
    $("#left").on("click", function () {
        if (count > 0) {
            count--;
        }
        else {
            count = 4;
        }
        change_div();
    })
})

function change_div() {
    $("#no").text((count + 1) + " / 5");
    $("#imgs li").hide();
    $("#imgs li:eq(" + count + ")").show();
    $(".select li").css("background", "none");
    $(".select li:eq(" + count + ")").css("background", "red");
    $("#imgs li").text("");
    $("#imgs li:eq(" + count + ")").text(titleA[count]);

}