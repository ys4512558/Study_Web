$(document).ready(function () {
    $(".btn li").click(function () {
        if (this == $(".page").get(0)) {
            alert("hi");
        }
    })
})