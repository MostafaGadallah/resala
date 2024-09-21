let totalElement = document.getElementById('total');
let total = 0;

// إنشاء كائن لتتبع عدد كل عنصر
let counts = {
    macaroni: 0,
    rice: 0,
    tomato: 0,
    onion: 0,
    potatoes: 0
};

document.querySelectorAll('.item img').forEach(img => {
    let timer;

    // On click, increase the price and update count
    img.addEventListener('click', () => {
        let price = parseInt(img.parentElement.getAttribute('data-price'));
        total += price;
        totalElement.innerText = total;

        // تحديث العداد
        let itemId = img.id;
        counts[itemId]++;
        document.getElementById(`count-${itemId}`).innerText = counts[itemId];
    });

    // On long press, decrease the amount and update count
    img.addEventListener('mousedown', () => {
        timer = setTimeout(() => {
            let price = parseInt(img.parentElement.getAttribute('data-price'));
            total -= price;
            if (total < 0) total = 0;
            totalElement.innerText = total;

            // تحديث العداد في حالة النقص
            let itemId = img.id;
            if (counts[itemId] > 0) {
                counts[itemId]--;
                document.getElementById(`count-${itemId}`).innerText = counts[itemId];
            }
        }, 1000); // 1 second press to decrease
    });

    img.addEventListener('mouseup', () => {
        clearTimeout(timer);
    });
});
