!(function () {
    /** ��ʱ��ʼʱ�䣬�����޸� **/
    var start = new Date("2022/10/11 18:00:00");

    function update() {
        var now = new Date();
        now.setTime(now.getTime() + 250);
        days = (now - start) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - start) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if (String(hnum).length === 1) {
            hnum = "0" + hnum;
        }
        minutes = (now - start) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if (String(mnum).length === 1) {
            mnum = "0" + mnum;
        }
        seconds = (now - start) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if (String(snum).length === 1) {
            snum = "0" + snum;
        }
        document.getElementById("timeDate").innerHTML = "��վ��ȫ����&nbsp" + dnum + "&nbsp��";
        document.getElementById("times").innerHTML = hnum + "&nbspСʱ&nbsp" + mnum + "&nbsp��&nbsp" + snum + "&nbsp��";
    }

    update();
    setInterval(update, 1000);
})();