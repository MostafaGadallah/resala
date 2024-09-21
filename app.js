// دالة للحصول على الكوكيز
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// تحميل الأسعار من الكوكيز
window.onload = function() {
    let macaroniPrice = getCookie('macaroniPrice') || 25;
    let ricePrice = getCookie('ricePrice') || 21;
    let tomatoPrice = getCookie('tomatoPrice') || 10;
    let onionPrice = getCookie('onionPrice') || 8;
    let potatoesPrice = getCookie('potatoesPrice') || 15;

    // تحديث الأسعار في الصفحة
    document.getElementById('price-macaroni').innerText = macaroniPrice;
    document.getElementById('price-rice').innerText = ricePrice;
    document.getElementById('price-tomato').innerText = tomatoPrice;
    document.getElementById('price-onion').innerText = onionPrice;
    document.getElementById('price-potatoes').innerText = potatoesPrice;

    // تحديث السعر في كل عنصر (data-price)
    document.querySelector('.item[data-price="25"]').setAttribute('data-price', macaroniPrice);
    document.querySelector('.item[data-price="21"]').setAttribute('data-price', ricePrice);
    document.querySelector('.item[data-price="10"]').setAttribute('data-price', tomatoPrice);
    document.querySelector('.item[data-price="8"]').setAttribute('data-price', onionPrice);
    document.querySelector('.item[data-price="15"]').setAttribute('data-price', potatoesPrice);

    updateTotal();
};

// دالة لحساب الإجمالي وتحديثه
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.item').forEach(item => {
        let price = parseFloat(item.getAttribute('data-price'));
        let count = parseInt(item.querySelector('.count').innerText);
        total += price * count;
    });
    document.getElementById('total').innerText = total;

    // حساب القيمة المتبقية للوصول إلى 250 جنيه
    let remainder = 250 - total;
    document.getElementById('remainder').innerText = remainder > 0 ? remainder : 0;
}

// زيادة الكمية
document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', function() {
        let item = this.getAttribute('data-item');
        let countElement = document.getElementById(`count-${item}`);
        let count = parseInt(countElement.innerText);
        countElement.innerText = count + 1;
        updateTotal();
    });
});

// تقليل الكمية
document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', function() {
        let item = this.getAttribute('data-item');
        let countElement = document.getElementById(`count-${item}`);
        let count = parseInt(countElement.innerText);
        if (count > 0) {
            countElement.innerText = count - 1;
            updateTotal();
        }
    });
});

// إعادة ضبط الكميات
document.getElementById('reset').addEventListener('click', function() {
    document.querySelectorAll('.count').forEach(countElement => {
        countElement.innerText = 0;
    });
    updateTotal();
});
