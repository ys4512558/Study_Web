var i, imgs;
window.onload = function () {
    imgs = document.querySelector(".imgs").getElementsByTagName("li");
    for (i = 0; i < imgs.length; i++) {
        imgs[i].innerHTML = i + 1;
        imgs[i].style.background = "url('/0925/img/img\ \(" + (i + 1) + "\).png')";
        imgs[i].style.backgroundSize = "100% 100%";

    }
}