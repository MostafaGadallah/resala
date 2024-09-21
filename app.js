let totalElement = document.getElementById('total');
let total = 0;
let counts = {
    macaroni: 0,
    rice: 0,
    tomato: 0,
    onion: 0,
    potatoes: 0
};

// Load prices from cookies or use default values
function getCookie(name) {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}

document.querySelectorAll('.item').forEach(item => {
    let itemId = item.querySelector('img').id;
    let price = getCookie(`price-${itemId}`) || item.getAttribute('data-price');
    document.getElementById(`price-${itemId}`).innerText = price;
    item.setAttribute('data-price', price);
});

document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
        let itemId = button.getAttribute('data-item');
        let price = parseInt(document.getElementById(`price-${itemId}`).innerText);
        total += price;
        totalElement.innerText = total;

        counts[itemId]++;
        document.getElementById(`count-${itemId}`).innerText = counts[itemId];
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
        let itemId = button.getAttribute('data-item');
        let price = parseInt(document.getElementById(`price-${itemId}`).innerText);
        if (counts[itemId] > 0) {
            total -= price;
            if (total < 0) total = 0;
            totalElement.innerText = total;

            counts[itemId]--;
            document.getElementById(`count-${itemId}`).innerText = counts[itemId];
        }
    });
});

document.getElementById('reset').addEventListener('click', () => {
    total = 0;
    totalElement.innerText = total;
    for (let itemId in counts) {
        counts[itemId] = 0;
        document.getElementById(`count-${itemId}`).innerText = 0;
    }
});
