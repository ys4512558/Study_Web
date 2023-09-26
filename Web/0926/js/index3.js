const menus = [
    "스타탐스 카페(주)",
    "주문하기",
    "예약하기",
    "매장안내",
    "지점안내",
    "로그인/회원가입",
]
const menu_texts = [
    "스타탐스 카페는 가격이 싸고 좋은 카페",
    "포장과 매장 둘 중의 하나를 선택해주세요",
    "예약하기 선택",
    "전국 지점 소개",
    "로그인 해주세요"
];

const infos =
    [
        [
            "딸기", "바나나", "아이스",
            "타르트", "망고쥬스", "팥빙수"
        ],
        [
            "100", "200", "300",
            "400", "500", "600"
        ],
        [
            "굿", "구웃", "구우웃",
            "구우우웃", "구우우우웃", "구우우우우웃"
        ]
    ];

var cnt = 1;
let menu, i;
window.onload = function () {
    menu = document.querySelector(".menu").getElementsByTagName("li");
    for (i = 0; i < menus.length; i++) {
        menu[i].innerHTML = menus[i];
    }
    $("#text1").text("상품 : " + infos[0][cnt - 1]);
    $("#text2").text("가격 : " + infos[1][cnt - 1]);
    $("#text3").text("영양 : " + infos[2][cnt - 1]);
}

var no;
$(function () {
    $(".menu li").on("click", function () {
        no = $(this).index();

        $(".text").text(menu_texts[no]);
    })
})

$(function () {
    $(".nextB").on("click", function () {
        if (cnt < 6) {
            cnt++;
            $(".disp").text(cnt + " / 6");
            $("#pic").attr("src", "img/img" + cnt + ".jpg");

            $("#text1").text("상품 : " + infos[0][cnt - 1]);
            $("#text2").text("가격 : " + infos[1][cnt - 1]);
            $("#text3").text("영양 : " + infos[2][cnt - 1]);
        }
    })
})

$(function () {
    $(".prevB").on("click", function () {
        if (cnt > 1) {
            cnt--;
            $(".disp").text(cnt + " / 6");
            $("#pic").attr("src", "img/img" + cnt + ".jpg");

            $("#text1").text("상품 : " + infos[0][cnt - 1]);
            $("#text2").text("가격 : " + infos[1][cnt - 1]);
            $("#text3").text("영양 : " + infos[2][cnt - 1]);
        }
    })
})
