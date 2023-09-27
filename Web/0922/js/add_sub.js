window.onload = function () {
    var cnt = 1;
    addBtn.onclick = function () {
        cnt++;
        no.innerHTML = cnt;
        pic.src = "/0921/img/img (" + cnt + ").png";
    }
    subBtn.onclick = function () {
        cnt--;
        no.innerHTML = cnt;
    }
}

