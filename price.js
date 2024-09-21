// دالة لتعيين الكوكيز
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

// دالة للحصول على الكوكيز
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// دالة لحفظ الأسعار في الكوكيز عند الضغط على زر "حفظ الأسعار"
document.getElementById('save').addEventListener('click', function() {
    let macaroniPrice = document.getElementById('price-macaroni').value;
    let ricePrice = document.getElementById('price-rice').value;
    let tomatoPrice = document.getElementById('price-tomato').value;
    let onionPrice = document.getElementById('price-onion').value;
    let potatoesPrice = document.getElementById('price-potatoes').value;

    // تخزين الأسعار في الكوكيز لمدة 7 أيام
    setCookie('macaroniPrice', macaroniPrice, 7);
    setCookie('ricePrice', ricePrice, 7);
    setCookie('tomatoPrice', tomatoPrice, 7);
    setCookie('onionPrice', onionPrice, 7);
    setCookie('potatoesPrice', potatoesPrice, 7);

    alert('تم حفظ الأسعار بنجاح!');
});

// دالة لتحميل الأسعار المخزنة في الكوكيز عند تحميل الصفحة
window.onload = function() {
    let macaroniPrice = getCookie('macaroniPrice');
    let ricePrice = getCookie('ricePrice');
    let tomatoPrice = getCookie('tomatoPrice');
    let onionPrice = getCookie('onionPrice');
    let potatoesPrice = getCookie('potatoesPrice');

    if (macaroniPrice) document.getElementById('price-macaroni').value = macaroniPrice;
    if (ricePrice) document.getElementById('price-rice').value = ricePrice;
    if (tomatoPrice) document.getElementById('price-tomato').value = tomatoPrice;
    if (onionPrice) document.getElementById('price-onion').value = onionPrice;
    if (potatoesPrice) document.getElementById('price-potatoes').value = potatoesPrice;
};
